import Footer from "@/components/public-components/Footer";
import Navbar from "@/components/public-components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-xl mx-auto px-2 md:px-0">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
