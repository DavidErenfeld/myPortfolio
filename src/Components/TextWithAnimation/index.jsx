import "./style.css";

const TextWithAnimation = ({ text, baseDelay = 0, delayIncrement = 100 }) => {
  const words = text.split(" ");
  return (
    <div>
      {words.map((word, index) => (
        <span
          key={index}
          className="animated fadeInUp"
          style={{ animationDelay: `${baseDelay + index * delayIncrement}ms` }}
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );
};
export default TextWithAnimation;
