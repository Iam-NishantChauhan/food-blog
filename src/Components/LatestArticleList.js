import React, { useState } from "react";
import { data } from "../data/data";
import LatestArticleCard from "./LatestArticleCard";
import {PiArrowSquareLeftLight} from "react-icons/pi";
import {PiArrowSquareRightLight} from "react-icons/pi";

const LatestArticleList = () => {
  const totalItems = data.length;
  const itemsPerSlide = 3;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? totalItems - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalItems);
  };

  const firstPart = data.slice(currentIndex, currentIndex + itemsPerSlide);
  const secondPart = data.slice(
    (currentIndex + itemsPerSlide) % totalItems,
    (currentIndex + itemsPerSlide ) % totalItems
  );

  return (
    <div className="latestArticleList">
      <div className="latestArticleListHeading">
        <h1>Latest Articles</h1>
      </div>
      <div className="cardContainer">
        {firstPart.map((item) => (
          <LatestArticleCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            para={item.para}
          />
        ))}
      </div>
      <div className="cardContainer">
        {secondPart.map((item) => (
          <LatestArticleCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            para={item.para}
          />
        ))}
      </div>
      <div className="slider-controls">
        <PiArrowSquareLeftLight onClick={handlePrevious} />
        <div className="current-index">{currentIndex + 1}/2</div>
        <PiArrowSquareRightLight onClick={handleNext} />
      </div>
    </div>
  );
};

export default LatestArticleList;
