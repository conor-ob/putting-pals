import {
  combinePresetAndAppleSplashScreens,
  createAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset: {
    ...minimal2023Preset,
    appleSplashScreens: createAppleSplashScreens({
      padding: 0.66,
      resizeOptions: { background: "#ffffff", fit: "contain" },
      darkResizeOptions: { background: "#000000", fit: "contain" },
      // by default, dark splash screens are exluded
      // darkResizeOptions: { background: 'black' },
      linkMediaOptions: {
        // will log the links you need to add to your html pages
        log: true,
        // add screen to media attribute link?
        // by default:
        // <link rel="apple-touch-startup-image" href="..." media="screen and ...">
        addMediaScreen: true,
        basePath: "/",
        // add closing link tag?
        // by default:
        // <link rel="apple-touch-startup-image" href="..." media="...">
        // with xhtml enabled:
        // <link rel="apple-touch-startup-image" href="..." media="..." />
        xhtml: false,
      },
    }),
  },
  images: ["public/logo.svg"],
});
