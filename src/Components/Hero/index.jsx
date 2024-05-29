import TextWithAnimation from "../TextWithAnimation";
import "./style.css";

const Hero = ({ learnMore }) => {
  return (
    <>
      <div className="details-section flex-gap-s">
        <div className="details-box flex-col-center-center">
          <p className="hero-name">
            <TextWithAnimation
              text="Hi, I am David Erenfeld"
              baseDelay={500}
              delayIncrement={100}
            />
          </p>
          <p className="role-details">
            <TextWithAnimation
              text="Full-stack Developer"
              baseDelay={1000}
              delayIncrement={100}
            />
          </p>
        </div>
        <div className="flex-row-center-start flex-gap-s">
          <a
            href="./myResume/DavidErenfeld.pdf"
            download="David_Erenfeld_Resume.pdf"
          >
            <button className="blu-btn">Downlode CV</button>
          </a>
          <a href={`#${learnMore}`}>
            <button>Learn More</button>
          </a>
        </div>
      </div>
      <div className="img-section">
        <img className="my-img" src="./imegs/profile.png" alt="my-img" />
        {/* <div className="my-img"></div> */}
      </div>
    </>
  );
};
export default Hero;
