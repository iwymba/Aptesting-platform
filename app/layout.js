import "./globals.css";
import { Manrope } from "next/font/google";
import { site } from "@/lib/data";
const f = Manrope({ subsets: ["latin"], variable: "--f" });
export const metadata = {
  title: `${site.name} | Parking, POS, Attendance and HR systems in Kandy`,
  description: `Custom software and electronics for Sri Lankan businesses. Parking systems, POS, attendance, HR and device management. Building systems since ${site.since}.`,
};
export default function RootLayout({ children }) { return (<html lang="en" className={f.variable}><body>{children}</body></html>); }
