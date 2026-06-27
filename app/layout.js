import "./globals.css";

export const metadata = {
  title: "Fundraising Store",
  description: "Fundraising Items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}