import "../styles/overlay.css";

export const Overlay = ({ children }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">{children}</div>
    </div>
  );
};

export default Overlay;
