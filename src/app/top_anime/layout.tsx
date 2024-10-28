import { Toaster } from "@/components/ui/toaster";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function SeasonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
