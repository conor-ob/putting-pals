import { expect, onTestFinished, suite, test } from "vitest";

import { createServer } from "../server";

suite("health/", () => {
  test("should return response", { retry: 3 }, async () => {
    // arrange
    const fastify = createServer({ logger: false });
    onTestFinished(() => fastify.close());

    // act
    const response = await fastify.inject({
      method: "GET",
      url: "/health",
    });

    // assert
    const healthCheckResponse = response.json<{
      env: string;
      message: string;
      greeting: string;
    }>();

    expect(response.statusCode).toEqual(200);
    expect(healthCheckResponse.env).toEqual("test");
    expect(healthCheckResponse.message).toEqual("OK");
    expect(healthCheckResponse.greeting).toEqual("Hello, Fastify!");
  });
});
