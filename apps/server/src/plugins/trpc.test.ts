import { expect, onTestFinished, suite, test } from "vitest";

import { createServer } from "~/server";

suite("trpc/", () => {
  test("should accept batched requests with long paths", async () => {
    // arrange
    const fastify = createServer({ logger: false });
    onTestFinished(() => fastify.close());
    const batchSize = 10;
    const path = Array(batchSize).fill("tour.getTours").join(",");
    const input = Object.fromEntries(
      Array.from({ length: batchSize }, (_, i) => [i, {}]),
    );

    // act
    const response = await fastify.inject({
      method: "GET",
      url: `/trpc/${path}?batch=1&input=${encodeURIComponent(JSON.stringify(input))}`,
    });

    // assert
    expect(path.length).toBeGreaterThan(100);
    expect(response.statusCode).toEqual(200);
    expect(response.json()).toHaveLength(batchSize);
  });
});
