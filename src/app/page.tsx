import Featured from "@/Components/Featured";
import HeroSection from "@/Components/HeroSection";
import Instructor from "@/Components/Instructor";
import Testinomial from "@/Components/Testinomial";
import Webinar from "@/Components/Webinar";
import WhyCouseUs from "@/Components/WhyCouseUs";

const Home = () => {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.02] ">
      <HeroSection />
      <Featured />
      <WhyCouseUs />
      <Testinomial />
      <Webinar />
      <Instructor />
    </main>
  );
};

export default Home;
