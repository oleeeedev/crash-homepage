import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";
import SupportedIDEs from "@/components/landing/ide";
import LandingPage from "@/components/landing/landing";
import Why from "@/components/landing/why";

export default function Home() {
  return (
    <>
    <Header />
    <LandingPage />
    <Why />
    <SupportedIDEs />
    <Footer />
    </>
    
  );
}
