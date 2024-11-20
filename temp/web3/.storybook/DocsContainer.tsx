import React, { FC, PropsWithChildren } from "react";
import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from "@storybook/blocks";
import { themes } from "@storybook/theming";

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({
  children,
  context,
}) => {
  const searchParams = new URL(window.location.href).searchParams;
  const isDarkTheme = searchParams.get("globals")?.includes("theme:dark");
  return (
    <BaseContainer
      theme={isDarkTheme ? themes.dark : themes.light}
      context={context}
    >
      {children}
    </BaseContainer>
  );
};
