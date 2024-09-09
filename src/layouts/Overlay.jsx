import "../styles/overlay.css";

export const Overlay = ({ children }) => {
  return (
    <div className="overlay" data-aos="fade-right" data-aos-duration="500">
      <div
        className="overlay-content"
        data-aos="fade-left"
        data-aos-duration="50"
      >
        {children}
      </div>
    </div>
  );
};

export default Overlay;
