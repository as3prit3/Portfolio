import {
  DM_Serif_Text,
  Inter,
  JetBrains_Mono,
  Poppins,
  STIX_Two_Text,
} from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const stixTwoText = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500"],
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

// also we need to add annimation for the title and content. for the titles like EXPERIENCE and /Experience need to appear in a smooth animation in place starting from botoom to fully appear. And the experience content for desktop should appear in place from left side, for the time line could also appear from top to bottom while keeping the scroll animation and for mobile cards should appear in place from top to bottom. All this should be smooth
