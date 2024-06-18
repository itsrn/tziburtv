import { Assistant } from "next/font/google";
import "./globals.css";

const inter = Assistant({
  subsets: ["hebrew"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "TziburTV",
  description: "ערוצי טלוויזיה ציבוריים בשידור חי",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
