import About from "@/components/About";
import Client from "@/components/Client";
import Games from "@/components/Games";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Technologies from "@/components/Technologies";

function MainPage() {
  return (
    <>
      <Hero />
      <Games/>
      <About />
      <Service />
      <Technologies />
      {/* <ProjectNum/> */}
      <Client />
      <Reviews />
    </>
  );
}

export default MainPage;
