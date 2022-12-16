import Head from "next/head";
import NavbarComponent from "../components/Navbar";
import HomeComponent from "../components/Home";
import AboutUsComponent from "../components/AboutUs";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HomeComponent />
      <AboutUsComponent />
    </div>
  );
}
