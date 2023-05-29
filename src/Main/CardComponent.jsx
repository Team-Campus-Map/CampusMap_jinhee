import React from "react";
import "../CSS/card.css";

const CardComponent = ({ cardtextheader, cardtextbody, cardimage }) => {
  return (
    <div>
      <div className="card">
        <img src={`/img/${cardimage}`} alt={cardtextheader} />
        <div className="cardText">
          <h1>{cardtextheader}</h1>
          <p>{cardtextbody}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
