import Education from "../EducationCard";
import "./style.css";

const Educations = ({ myEducation }) => {
  return (
    <>
      <h2>Education</h2>
      <section className="educations-container">
        {myEducation.map((education, index) => (
          <Education key={index} educationDetails={education} />
        ))}
      </section>
    </>
  );
};
export default Educations;
