const Member = ({ name, position, img }) => {
  return (
    <div className="member">
      <img src={img} alt="" />
      <div className="details">
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default Member;
