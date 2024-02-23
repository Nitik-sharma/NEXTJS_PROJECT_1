import Featured from "@/Components/Featured";
import HeroSection from "@/Components/HeroSection";

const Home = () => {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.02] ">
      <HeroSection />
      <Featured />
    </main>
  );
};

export default Home;
