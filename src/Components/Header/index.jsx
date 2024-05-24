import "./style.css";

const Header = () => {
  // const goToContact = () => {
  //   console.log("goToContact");
  // };
  // const goToAboutMe = () => {
  //   console.log("goToAboutMe");
  // };
  // const goToProjects = () => {
  //   console.log("goToProjects");
  // };
  return (
    <header>
      <a className="my-name" href="myName">
      
        David Erenfeld
      </a>

      <nuv className="nuv-list">
        <h3>
          <a href="#about">About Me</a>
        </h3>
        <h3>
          <a href="#projects">Projects</a>
        </h3>
        <h3>
          <a href="#contact">Contact</a>
        </h3>
      </nuv>
    </header>
  );
};

export default Header;
