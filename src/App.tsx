import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { WorkProcess } from "./components/WorkProcess";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { DocumentHead } from "./components/DocumentHead";

export default function App() {
  return (
    <>
      <div id="top" className="sr-only" tabIndex={-1}>
        Top of page
      </div>
      <DocumentHead />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-neutral-950"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="min-w-0 overflow-x-clip">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Technologies />
        <WorkProcess />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}