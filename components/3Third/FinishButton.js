import React from "react";

const FinishButton = ({ onClick, disabled }) => {
  return (
    <button className="finish-button" onClick={onClick} disabled={disabled}>
      Finish
      <style jsx>{`
        .finish-button {
          padding: 10px 10px;
          background-color: ${isAnyCardSelected ? "#ff4081" : "#cccccc"};
          color: ${isAnyCardSelected ? "#ffffff" : "#666666"};
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: ${isAnyCardSelected ? "pointer" : "not-allowed"};
          transition: background-color 0.3s, color 0.3s;
        }
        .finish-button:hover {
          background-color: ${isAnyCardSelected ? "#ff4081" : "#cccccc"};
          color: ${isAnyCardSelected ? "#ffffff" : "#666666"};
        }
        @media (max-width: 768px) {
          .finish-button {
            font-size: 14px;
          }
        }
      `}</style>
    </button>
  );
};

export default FinishButton;
