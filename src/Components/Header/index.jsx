import "./style.css";

const Header = ({ sections }) => {
  return (
    <>
      <a className="my-name" href="myName">
        David Erenfeld
      </a>

      <nuv className="nuv-list">
        <h3>
          <a href={`#${sections.about}`}>About Me</a>
        </h3>
        <h3>
          <a href={`#${sections.projects}`}>Projects</a>
        </h3>
        <h3>
          <a href={`#${sections.contact}`}>Contact</a>
        </h3>
      </nuv>
    </>
  );
};

export default Header;
