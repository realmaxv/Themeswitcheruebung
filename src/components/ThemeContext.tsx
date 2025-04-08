import { createContext } from "react";

type ThemeContextProps = {
  theme: string;
  themeIncrement: React.MouseEventHandler;
  title: string;
};

export const themeContext = createContext<ThemeContextProps>(null!);
