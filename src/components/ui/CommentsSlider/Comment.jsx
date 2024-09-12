import { BsStarFill } from "react-icons/bs";
import Container from "../../../layouts/Container";
import "./comments.css";
import user from "../../../assets/users/Picture.png";
import comments from "../../../data/comments/comments";
import { useState } from "react";

const Comment = () => {
  const [showedComments, setShowedComments] = useState(0);

  return (
    <div className="comments main-gap ">
      <Container>
        <h1 data-aos="fade-down">
          We Are Loved By Users And Clients Worldwide
        </h1>
        <div className="comment-wrapper">
          {comments && (
            <CommentCard
              aos={"zoom-out"}
              userImg={comments[showedComments].img}
              key={comments[showedComments].id}
              name={comments[showedComments].name}
              title={comments[showedComments].title}
              rating={comments[showedComments].rating}
            >
              {comments[showedComments].message}
            </CommentCard>
          )}
        </div>

        <div className="circular-taps">
          {comments.map((comment) => {
            return (
              <span
                onClick={() => {
                  setShowedComments(comment.id);
                }}
              ></span>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const CommentCard = ({ name, title, rating, userImg, aos, children }) => {
  return (
    <div className="comment-card" data-aos-duration="200" data-aos={`${aos}`}>
      <div className="message">
        <p>{children}</p>
      </div>
      <div className="user-data">
        <div className="user">
          <img src={userImg} />
          <div className="name">
            <span className="user-name">{name}</span>
            <span className="job-title">{title}</span>
          </div>
        </div>
        <div className="rating">
          <span>{rating}</span>
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
