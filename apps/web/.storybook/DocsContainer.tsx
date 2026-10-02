import {
  DocsContainer as BaseContainer,
  type DocsContainerProps,
} from "@storybook/blocks";
import { themes } from "@storybook/theming";
import type { FC, PropsWithChildren } from "react";

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({
  children,
  context,
}) => {
  const searchParams = new URL(window.location.href).searchParams;
  const isDarkTheme = searchParams.get("globals")?.includes("theme:dark");
  return (
    <BaseContainer
      theme={
        isDarkTheme
          ? {
              ...themes.dark,
              appContentBg: "#000000",
            }
          : themes.light
      }
      context={context}
    >
      {children}
    </BaseContainer>
  );
};
