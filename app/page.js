import "../styles/home.css";
import LandingSection from "@components/Home/LandingSection";
import OurServices from "@components/Home/OurServices";
import OurProjects from "@components/Home/OurProjects";
export default function Home() {
  return (
    <main className="home-page">
      <LandingSection />

      <OurServices />
      <OurProjects />
    </main>
  );
}
