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

      {/* <br />
      <br />
      <br />
      <div className="flex justify-center items-center">
        <div className=" border shadow-lg border-s-fuchsia-600 shadow-fuchsia-900 border-e-fuchsia-600 border-t-fuchsia-600 border-b-fuchsia-600  p-36 rounded-2xl ">
          
        </div>
      </div> */}
    </PageTransition>
  );
}

export default MainPage;
