import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { MessageProvider } from "@/contexts/MessageContext";
import { OverlayProvider } from "@/contexts/OverlayContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SSAI",
  description: "Created by Team SmartSource.AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MessageProvider>
          <OverlayProvider>{children}</OverlayProvider>
        </MessageProvider>
      </body>
    </html>
  );
}
