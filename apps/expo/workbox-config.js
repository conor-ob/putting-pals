module.exports = {
  globDirectory: "dist",
  globPatterns: ["**/*.{json,png,ico,css,js}"],
  // index.html is served network-first below, metadata.json is a build artifact
  globIgnores: ["index.html", "metadata.json"],
  swDest: "dist/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  // activate a new service worker as soon as it installs, so a deploy is
  // picked up on the next page load instead of after every tab is closed
  skipWaiting: true,
  clientsClaim: true,
  cleanupOutdatedCaches: true,
  runtimeCaching: [
    {
      // always fetch the latest index.html, fall back to the cached copy offline
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        networkTimeoutSeconds: 3,
      },
    },
  ],
};
