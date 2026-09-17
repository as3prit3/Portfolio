import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import {
  dmSerifText,
  inter,
  jetBrainsMono,
  poppins,
  stixTwoText,
} from "./fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Houssam Hadhadi — Software Engineer",
  description:
    "Software engineer focused on building clean, reliable web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${stixTwoText.variable}
        ${poppins.variable}
        ${jetBrainsMono.variable}
        ${dmSerifText.variable}
        h-full
        antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
