import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Divider from "./components/Divider";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
