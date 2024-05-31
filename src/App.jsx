import React, { useEffect, useRef, useState, useContext } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Educations from "./Components/Educations";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { contactDetails } from "./UserData/MyContact";
import { myProjects } from "./UserData/MyProjects";
import { myEducation } from "./UserData/MyEducation";
import ThemeToggle from "./Components/ThemeToggle";

export const ThemeContext = React.createContext();
function App() {
  const headerRef = useRef(null);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const sections = {
    about: "about",
    projects: "projects",
    contact: "contact",
    education: "Education",
    skills: "skills",
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
    document.root.style.height = !isMobileNavOpen ? "hidden" : "auto";
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
          header.classList.remove("header");
        } else {
          header.classList.remove("sticky");
          header.classList.add("header");
        }
      };

      window.addEventListener("scroll", scrollCallback);

      return () => {
        window.removeEventListener("scroll", scrollCallback);
        AOS.refresh();
      };
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <header ref={headerRef} className="header flex-row-space-between ">
        <div className="theme-toggle-icon">
          <ThemeToggle />
        </div>
        <Header
          toggleTheme={toggleTheme}
          toggleMobileNav={toggleMobileNav}
          isMobileNavOpen={isMobileNavOpen}
          sections={sections}
        />
      </header>

      <main className="container">
        <Hero learnMore={sections.about} />
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
          id={sections.education}
          data-aos="zoom-in"
        >
          <Educations myEducation={myEducation} />
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
    </ThemeContext.Provider>
  );
}

export default App;
