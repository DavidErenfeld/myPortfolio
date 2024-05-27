import UdemyIcon from "../Icons/UdemyIcon";
import Loader from "../Loader";
import "./style.css";

const AducationCard = ({ educationDetails }) => {
  const { siteStyle, year, courseName, studyPlaceName } = educationDetails;
  return (
    <>
      <div className="timeline">
        <div className={`timeline-item ${siteStyle}`}>
          <h3 className="year flex-col-start-start">
            {year}
            <span className="course-name">{courseName}</span>
          </h3>
          <p className="study-place-name">{studyPlaceName}</p>
        </div>
      </div>
    </>
  );
};
export default AducationCard;
