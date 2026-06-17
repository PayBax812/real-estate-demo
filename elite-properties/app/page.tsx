import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PropertiesSection from "@/components/PropertiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewLaunchProjects from "@/components/NewLaunchProjects";
import AreasSection from "@/components/AreasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import LeadForm from "@/components/LeadForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <PropertiesSection />
        <WhyChooseUs />
        <NewLaunchProjects />
        <AreasSection />
        <TestimonialsSection />
        <AboutSection />
        <LeadForm />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
      <ExitIntentPopup />
    </>
  );
}
