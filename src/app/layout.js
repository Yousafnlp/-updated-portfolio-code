/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";

export const metadata = {
  title: "Yousaf Ijaz Munawar",
  description: "Web Developer - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className="bg-black">
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
