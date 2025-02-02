import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col justify-between">
          <Header />
          <main className="flex justify-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
