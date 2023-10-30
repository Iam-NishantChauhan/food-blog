import React from "react";

const LatestArticleCard = ({ img, title, para }) => {
  return (
    <div className="latestArticleCard">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{para}</p>
      <button>Know More</button>
    </div>
  );
};

export default LatestArticleCard;
