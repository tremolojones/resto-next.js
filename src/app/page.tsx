
import About from "./section/About";
import Events from "./section/Events";
import Hero from "./section/Hero";
import Menu from "./section/Menu";
import Specials from "./section/Specials";
import WhyUs from "./components/WhyUs";
import Booking from "./section/Booking";
import Testimonials from "./section/Testimonials";
import Gallery from "./section/Gallery";
import Chefs from "./section/Chefs";
import Contact from "./section/Contact";
 




export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <Booking />
        <Testimonials />
        <Gallery />
        <Chefs />
        <Contact />
         
      </main>
      </>
  );
}

