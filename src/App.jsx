import { useEffect, useRef } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Aducations from "./Components/Aducations";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { contactDetails } from "./UserData/MyContact";
import { myProjects } from "./UserData/MyProjects";
import { myAducation } from "./UserData/MyAducation";

function App() {
  const headerRef = useRef(null);
  const sections = {
    about: "about",
    projects: "projects",
    contact: "contact",
    aducation: "aducation",
    skills: "skills",
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1100,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    // Sticky header logic
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
        AOS.refresh();
      };
    }
  }, []);
  return (
    <>
      <header ref={headerRef} className="header flex-row-space-between a">
        <Header sections={sections} />
      </header>
      <main className="container">
        <Hero learnMore={sections.projects} />
        <section
          className="projects-section flex-col-center-center flex-gap-m"
          id={sections.projects}
          data-aos="zoom-in"
        >
          <Projects myProjects={myProjects} />
        </section>
        <section
          className="about-me-section flex-col-center-center flex-gap-m"
          id={sections.about}
          data-aos="zoom-in"
        >
          <AboutMe />
        </section>
        <section
          className="education-section flex-col-center-center flex-gap-m"
          id={sections.aducation}
          data-aos="zoom-in"
        >
          <Aducations myAducation={myAducation} />
        </section>
        <section
          className="skills-section flex-col-center-center flex-gap-m"
          id={sections.skills}
          data-aos="zoom-in"
        >
          <Skills />
        </section>
      </main>
      <section
        className="footer-section flex-col-center-center flex-gap-m"
        id={sections.contact}
      >
        <Footer contactDetails={contactDetails} />
      </section>
    </>
  );
}

export default App;
