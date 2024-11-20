import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // const [paletteToggle, setPaletteToggle] = useState(false);

  // // Listen for the toggle check/uncheck to toggle the dark palette
  // const toggleChange = (ev: ToggleCustomEvent) => {
  //   toggleDarkPalette(ev.detail.checked);
  // };

  // Add or remove the "ion-palette-dark" class on the html element
  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
    document.documentElement.classList.toggle("dark", shouldAdd);
  };

  // Check/uncheck the toggle and update the palette based on isDark
  const initializeDarkPalette = (isDark: boolean) => {
    // setPaletteToggle(isDark);
    toggleDarkPalette(isDark);
  };

  useEffect(() => {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    initializeDarkPalette(prefersDark.matches);

    const setDarkPaletteFromMediaQuery = (mediaQuery: MediaQueryListEvent) => {
      initializeDarkPalette(mediaQuery.matches);
    };

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener("change", setDarkPaletteFromMediaQuery);

    return () => {
      prefersDark.removeEventListener("change", setDarkPaletteFromMediaQuery);
    };
  }, []);

  return <>{children}</>;
}
