import { IonItem } from "@ionic/react";

export function ListItem({
  button = false,
  children,
}: {
  button?: boolean;
  children?: React.ReactNode;
}) {
  let baseStyles: {
    "--padding-start": string;
    "--min-height": string;
    "--inner-padding-end"?: string;
  } = {
    "--padding-start": "0px",
    "--min-height": "0px",
  };
  if (button === false) {
    baseStyles = {
      ...baseStyles,
      "--inner-padding-end": "0px",
    };
  }
  return (
    <IonItem button={button} style={baseStyles} lines="none">
      {children}
    </IonItem>
  );
}
