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
      <div id="about">
        <About />
      </div>
      <br />
      <div id="service">
        <Service />
      </div>
      <br />
      <div id="technologies">
        <Technologies />
      </div>
      <br />
      <div id="client">
        <Client />
      </div>
      <br />
      <div id="reviews">
        <Reviews />
      </div>
    </PageTransition>
  );
}

export default MainPage;
