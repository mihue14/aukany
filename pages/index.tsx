import Head from "next/head";
import NavbarComponent from "../components/Navbar";
import HomeComponent from "../components/Home";
import AboutUsComponent from "../components/AboutUs";
import ScheduleComponent from "../components/Schedule";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HomeComponent />
      <AboutUsComponent />
    </div>
  );
}
