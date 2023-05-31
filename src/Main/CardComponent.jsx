import React from "react";
import "../CSS/card.css";

const CardComponent = ({
  cardtextheader,
  cardtextbody,
  cardimage,
  cardlink,
  cardhref,
}) => {
  return (
    <div>
      <div className="card">
        <img src={`/img/${cardimage}`} alt={cardtextheader} />
        <div className="cardText">
          <h1>{cardtextheader}</h1>
          <p>{cardtextbody}</p>
          <a href={cardhref}>
            <button>{cardlink}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
