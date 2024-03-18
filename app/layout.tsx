import type { Metadata } from "next";
import { IBM_Plex_Mono} from 'next/font/google';
import { cn } from "@/lib/utils";
import "./globals.css";

const IBMPlex = IBM_Plex_Mono({ subsets: ["latin"] ,
weight:['400','500','600'],
variable:'--font-ibm-plex'});

export const metadata: Metadata = {
  title: "Camro",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased",IBMPlex.variable)}>
        {children}
        </body>
    </html>
  );
}
