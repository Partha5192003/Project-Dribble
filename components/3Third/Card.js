import React from "react";
import Image from "next/image";

const Card = ({ title, description, image, onCardSelect, isSelected }) => {
  const handleClick = () => {
    onCardSelect(!isSelected); // Toggle card selection/deselection
  };

  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="card-content">
        {!isSelected && <h3>{title}</h3>}
        <Image
          src={image}
          alt="Card"
          className="card-image"
          width={150}
          height={100}
        />
        {isSelected && (
          <div className="card-content1">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="correct-symbol">✔</span>
          </div>
        )}
      </div>
      <style jsx>{`
        .card {
          background-color: #ffffff;
          border: 1px solid #cccccc;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: visible;
          width: 300px;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
        }
        .card.selected {
          border-color: #ff4081;
          box-shadow: 0px 5px 15px rgba(255, 64, 129, 0.1);
        }
        .card-content {
          position: relative;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .card-image {
          width: 150px;
          height: auto;
          border-radius: 5px;
          transition: transform 0.3s ease;
          position: absolute;
          top: ${isSelected ? "-50px" : "0"};
          left: 50%;
          transform: translateX(-100%);
          z-index: 2;
        }
        .card-content h3 {
          font-weight: bold;
          font-size: 16px;
          margin-top: 10px;
        }
        .card-content1 h3 {
          font-weight: bold;
          font-size: 16px;
          margin-top: 10px;
        }
        .card-content1 p {
          font-size: 14px;
          color: #666666;
          margin-top: 10px;
          margin-bottom: 0px;
          text-align: center;
        }
        .card-content p {
          font-size: 14px;
          color: #666666;
          margin-bottom: 10px;
        }
        .correct-symbol {
          color: #ff4081;
          font-size: 24px;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Card;
