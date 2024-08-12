import { useState } from "react";

export const Book = ({ card, action, value }) => {
  const [like, setLike] = useState(0);
  const handleUpLike = () => {
    setLike((like) => ++like);
    action((value) => ++value);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={card.img} className="card-img-top" alt={card.title}></img>
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.description}</p>
      </div>
      <div onClick={handleUpLike}>
        <i className="bi bi-heart"></i>
      </div>
      <p>{like}</p>
    </div>
  );
};
