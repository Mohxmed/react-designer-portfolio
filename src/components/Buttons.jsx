import "../styles/buttons.css";
// Main Buttons
const MainButton = ({ text, icon }) => {
  return (
    <button className="btn main-btn">
      <span>
        {icon}
        {text}
      </span>
    </button>
  );
};
const OutlineButton = ({ text, icon }) => {
  return (
    <button className="btn outline-btn">
      <span>
        {icon}
        {text}
      </span>
    </button>
  );
};

export { MainButton, OutlineButton };
