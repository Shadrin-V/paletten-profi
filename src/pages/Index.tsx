import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import SavingsCalculator from "@/components/SavingsCalculator";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import ClientLogos from "@/components/ClientLogos";
import Testimonial from "@/components/Testimonial";
import SupplierCTA from "@/components/SupplierCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MetricsBar />
      <SavingsCalculator />
      <HowItWorks />
      <Solutions />
      <ClientLogos />
      <Testimonial />
      <SupplierCTA />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
