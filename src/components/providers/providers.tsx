import { ScreenHelpers } from "../indicators/screen-indicators";
import { ThemeProvider } from "./theme-provider";

interface providersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: providersProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark"
    >
      {children}
      <ScreenHelpers />
    </ThemeProvider>
  );
}
