import * as React from "react";
import { createThemeVariables, type ThemeName } from "@aurora-ui/tokens";

type AuroraProviderProps = {
  children: React.ReactNode;
  theme?: ThemeName;
};

export function AuroraProvider({ children, theme = "core-light" }: AuroraProviderProps) {
  const style = React.useMemo(() => createThemeVariables(theme), [theme]);
  return <div style={style as React.CSSProperties}>{children}</div>;
}
