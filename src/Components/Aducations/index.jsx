import Aducation from "../AducationCard";
import "./style.css";

const Aducations = ({ myAducation }) => {
  return (
    <>
      <h2>Aducation</h2>
      <section className="aducations-container">
        {myAducation.map((aducation, index) => (
          <Aducation key={index} educationDetails={aducation} />
        ))}
      </section>
    </>
  );
};
export default Aducations;
