import Fonts from "@/components/Fonts";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
