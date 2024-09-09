import { BsStar, BsStarFill } from "react-icons/bs";
import Container from "../../layouts/Container";
import "./comments.css";
import user from "../../assets/users/Picture.png";
const Comment = () => {
  return (
    <div className="comments main-gap ">
      <Container>
        <h1 data-aos="fade-down">
          We Are Loved By Users And Clients Worldwide
        </h1>
        <div className="comment-wrapper">
          <CommentCard aos={"fade-right"} />
          <CommentCard aos={"fade-left"} />
        </div>

        <div className="circular-taps">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>
    </div>
  );
};

const CommentCard = ({ aos }) => {
  return (
    <div className="comment-card" data-aos={`${aos}`}>
      <div className="message">
        <p>
          One of the best additions to our feedback loop has been the
          company-wide adoption of Fellow.
        </p>
      </div>
      <div className="user-data">
        <div className="user">
          <img src={user} />
          <div className="name">
            <span className="user-name">Ronald Richards</span>
            <span className="job-title">UI/UX Designer</span>
          </div>
        </div>
        <div className="rating">
          <span>4.5</span>
          <span>
            <BsStarFill fill="#eebf63" />
            <BsStarFill fill="#eebf63" />
            <BsStarFill fill="#eebf63" />
            <BsStarFill fill="#eebf63" />
            <BsStarFill fill="#eebf63" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Comment;
