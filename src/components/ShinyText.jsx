import "./ShinyText.css";

const ShinyText = ({
  text = "",
  disabled = false,
  speed = 5,
  className = "",
}) => {
  return (
    <span
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{ "--animation-duration": `${speed}s` }} //  Uses CSS variable for dynamic speed control
    >
      {text}
    </span>
  );
};

export default ShinyText;
