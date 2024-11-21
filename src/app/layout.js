import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import ThemeCom from "./components/ThemeCom";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeModeScript } from 'flowbite-react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <ThemeCom>
              <Header />
              {children}
            </ThemeCom>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
