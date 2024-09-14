import { useState } from "react";

import Container from "@layouts/Container";
import comments from "@data/comments/comments";

import "./comments.css";
import { BsStarFill } from "react-icons/bs";

//
const Comment = () => {
  const [showedComments, setShowedComments] = useState(0);
  const numberOfPages = Math.ceil(comments.length / 2);
  const firstCommentIndex = showedComments * 2;
  const secondCommentIndex = firstCommentIndex + 1;

  return (
    <div className="comments main-gap">
      <Container>
        <h1 data-aos="fade-down">
          We Are Loved By Users And Clients Worldwide
        </h1>
        <div className="comment-wrapper">
          {comments[firstCommentIndex] && (
            <CommentCard
              aos={"fade-in"}
              userImg={comments[firstCommentIndex].img}
              key={comments[firstCommentIndex].id}
              name={comments[firstCommentIndex].name}
              title={comments[firstCommentIndex].title}
              rating={comments[firstCommentIndex].rating}
            >
              {comments[firstCommentIndex].message}
            </CommentCard>
          )}

          {comments[secondCommentIndex] && (
            <CommentCard
              aos={"fade-in"}
              userImg={comments[secondCommentIndex].img}
              key={comments[secondCommentIndex].id}
              name={comments[secondCommentIndex].name}
              title={comments[secondCommentIndex].title}
              rating={comments[secondCommentIndex].rating}
            >
              {comments[secondCommentIndex].message}
            </CommentCard>
          )}
        </div>

        <div className="circular-taps">
          {Array(numberOfPages)
            .fill("")
            .map((_, index) => (
              <span
                key={index}
                className={`tap${index === showedComments ? " active" : ""}`}
                onClick={() => setShowedComments(index)}
              ></span>
            ))}
        </div>
      </Container>
    </div>
  );
};

const CommentCard = ({ name, title, rating, userImg, aos, children }) => {
  return (
    <div className="comment-card" data-aos-duration="1000" data-aos={`${aos}`}>
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
