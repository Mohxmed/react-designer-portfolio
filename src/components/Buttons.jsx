import "../styles/buttons.css";
// Main Buttons
const MainButton = ({ onClick, text, icon }) => {
  return (
    <button onClick={onClick} className="btn main-btn">
      <span>
        {icon}
        {text}
      </span>
    </button>
  );
};
const OutlineButton = ({ onClick, text, icon }) => {
  return (
    <button onClick={onClick} className="btn outline-btn">
      <span>
        {icon}
        {text}
      </span>
    </button>
  );
};

export { MainButton, OutlineButton };
