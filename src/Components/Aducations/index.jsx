import Aducation from "../AducationCard";
import "./style.css";

const Aducations = () => {
  const myAducation = [
    {
      siteStyle: "right",
      year: "2021 - 2024",
      courseName: "B.Sc student in Computer Science",
      studyPlaceName: "The College of Management",
    },
    {
      siteStyle: "left",
      year: "2024",
      courseName: "The Complete JavaScript Course",
      studyPlaceName: 'Udemy, "Jonas Schmedtmann"',
    },
    {
      siteStyle: "left",
      year: "2024",
      courseName: "The Complete 2024 Web Development Bootcamp",
      studyPlaceName: 'Udemy, "Dr. Angela Yu"',
    },
    {
      siteStyle: "right",
      year: "2023",
      courseName: "Build Responsive Real-World Websites with HTML and CSS",
      studyPlaceName: 'Udemy, "Jonas Schmedtmann"',
    },
    {
      siteStyle: "left",
      year: "2015 -2017",
      courseName: "Civil Service",
      studyPlaceName: "Orot Youth Association (mentor for at-risk youth)",
    },
  ];
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
