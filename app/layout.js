import { Outfit, Silkscreen } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";


const outfit = Outfit({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"]
})

export const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ["400", "700"]
});

export const metadata = {
  title: "InkFlow",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
