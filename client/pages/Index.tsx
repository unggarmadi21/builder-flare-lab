import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import AppointmentSection from "@/components/AppointmentSection";
import Doctors from "@/components/Doctors";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <Specialties />
      <AppointmentSection />
      <Doctors />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
