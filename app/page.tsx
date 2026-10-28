import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutOwner from "@/components/AboutOwner";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About the Owner Section */}
        <AboutOwner />

        {/* Our Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Contact Information Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Dock */}
      <MobileActionDock />
    </>
  );
}
