import { useEffect, useRef } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProjectCard from "./Components/ProjectCard";
import Projects from "./Components/Projects";

function App() {
  const sections = {
    about: "about",
    projects: "projects",
    contact: "contact",
  };

  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    return () => {
      AOS.refresh();
    };
  }, []);
  //   fade-up
  // fade-down
  // fade-right
  // fade-left
  // zoom-in
  // zoom-out
  // flip-left
  // flip-right
  // slide-up
  // slide-down
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const sticky = header.offsetTop;

      const scrollCallback = () => {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      };

      window.addEventListener("scroll", scrollCallback);

      return () => {
        window.removeEventListener("scroll", scrollCallback);
      };
    }
  }, []);
  return (
    <main className="container">
      <div ref={headerRef} className="header">
        <Header sections={sections} />
      </div>
      <Hero />

      <section
        className="projects-section"
        id={sections.projects}
        data-aos="zoom-in"
      >
        <Projects />
      </section>
      <section
        className="about-me-section"
        id={sections.about}
        data-aos="zoom-in"
      >
        <AboutMe />
      </section>
    </main>
  );
}

export default App;
