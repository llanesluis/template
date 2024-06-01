import { ThemeProvider } from "./theme-provider";

interface providersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: providersProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
    >
      {children}
    </ThemeProvider>
  );
}
