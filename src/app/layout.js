import Fonts from "@/components/Fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/context/UserContext";
import { ThemeProvider } from "@/components/navbar/themes/ThemeProvider";

export const metadata = {
  title: "TrustFunds",
  description: "Crowdfunding platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Fonts />
      </head>
      <body className="overflow-hidden bg-home-bg">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <Toaster />
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
