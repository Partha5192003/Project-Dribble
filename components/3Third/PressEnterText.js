const PressEnterText = () => {
  return (
    <p className="press-enter-text">
      or press <span className="return">Enter</span>
      <style jsx>{`
        .press-enter-text {
          font-size: 14px;
          color: #666666; /* Dark Gray */
          text-align: center;
        }
        .return {
          font-weight: bold;
          color: #ff4081; /* Pink */
        }
        @media (max-width: 768px) {
          .press-enter-text {
            font-size: 12px;
          }
        }
      `}</style>
    </p>
  );
};

export default PressEnterText;
