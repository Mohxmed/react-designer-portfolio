const ProsCard = ({ img, title, description, delay }) => {
  return (
    <div className="card" data-aos="fade-right" data-aos-delay={`${delay}`}>
      <img src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProsCard;
