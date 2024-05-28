import "./style.css";

const AducationCard = ({ educationDetails }) => {
  const { siteStyle, year, courseName, studyPlaceName, courseLink } =
    educationDetails;
  return (
    <>
      <div className="timeline">
        <div className={`timeline-item ${siteStyle}`}>
          <h3 className="year flex-col-start-start">
            {year}
            <a className="course-name" href={courseLink} target="_blank">
              {courseName}
            </a>
          </h3>
          <p className="study-place-name">{studyPlaceName}</p>
        </div>
      </div>
    </>
  );
};
export default AducationCard;
