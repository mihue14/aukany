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
import logo from "../assets/logo2.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aukany</title>
        <meta name="google" content="notranslate" />
        <link rel="shortcut icon" href={logo.src} />
      </Head>
      <div className="border border-black">
        <NavbarComponent />
        <HomeComponent />
        <AboutUsComponent id="1" />
        <ScheduleComponent id="2" />
        <TeamComponent id="3" />
        <ServicesComponent id="4" />
        <GalleryComponent id="5" />
        <ContactComponent id="6" />
        <FooterComponent />
      </div>
    </>
  );
}
