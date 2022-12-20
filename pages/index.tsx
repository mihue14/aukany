import Head from "next/head";
import NavbarComponent from "../components/Navbar";
import HomeComponent from "../components/Home";
import AboutUsComponent from "../components/AboutUs";
import ScheduleComponent from "../components/Schedule";
import TeamComponent from "../components/Team";
import ServicesComponent from "../components/Services";
import GalleryComponent from "../components/Gallery";
import ContactComponent from "../components/Contact";
import FooterComponent from "../components/Footer";

export default function Home() {
  return (
    <div className="border border-black">
      <NavbarComponent />
      <HomeComponent />
      <AboutUsComponent />
      <ScheduleComponent />
      <TeamComponent />
      <ServicesComponent />
      <GalleryComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}
