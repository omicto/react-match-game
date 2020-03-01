import React from "react";
import "./card.styles.scss";

const Card = ({ pairId, id, flipped, value, handleClick }) => {
  const onClick = flipped ? null : () => handleClick(id);
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={onClick}>
      {flipped ? value : ""}
    </div>
  );
};

export default Card;
