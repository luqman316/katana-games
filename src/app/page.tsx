import About from "@/components/About";
import Client from "@/components/Client";
import Games from "@/components/Games";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Technologies from "@/components/Technologies";

function MainPage() {
  return (
    <PageTransition>
      <Hero />
      <br />
      <Games />
      <br />
      <About />
      <br />
      <Service />
      <br />
      <Technologies />
      <br />
      <Client />
      <br />
      <Reviews />
    </PageTransition>
  );
}

export default MainPage;
