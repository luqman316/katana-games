import About from "@/components/About";
import Client from "@/components/Client";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Technologies from "@/components/Technologies";

function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Technologies />
      {/* <ProjectNum/> */}
      <Client />
    </>
  );
}

export default MainPage;
