import TextWithAnimation from "../TextWithAnimation";
import "./style.css";

const Hero = () => {
  return (
    <>
      {/* // <section className="hero-section flex"> */}
      <div className="details-section ">
        <div className="details-box flex-col-center-center">
          <p className="name-details">
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
          <button className="blu-btn">Downlode CV</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="img-section">
        <img className="my-img" src="./imegs/user.png" alt="my-img" />
      </div>
      {/* // </section> */}
    </>
  );
};
export default Hero;
