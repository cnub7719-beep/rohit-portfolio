import Loader from "../components/Loader";
import MouseGlow from "../components/MouseGlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import ThumbnailGallery from "../components/ThumbnailGallery";
import Process from "../components/Process";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 relative overflow-hidden">
      <Loader />

      <MouseGlow />

      <Navbar />

      <Hero />

      <Services />

      <Skills />

      <FeaturedProjects />

      <ThumbnailGallery />

      <Process />

      <About />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}
