const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h1>What brings you to Dribble? </h1>
      <p className="subtext">
        Select the options that best describe you. Don&apos;t worry, you can
        explore other options later.
      </p>
      <style jsx>{`
        .welcome-message {
          margin-top: 20px;
          text-align: center;
        }
        h1 {
          font-weight: bold;
          color: #000000; /* Black */
          font-size: 34px; /* Adjust font size */
        }
        .subtext {
          color: #666666; /* Dark Gray */
          font-size: 14px; /* Adjust font size */
        }
        @media (max-width: 768px) {
          .welcome-message {
            margin-top: 500px;
            text-align: center;
          }
          h1 {
            font-weight: bold;
            color: #000000; /* Black */
            font-size: 24px; /* Adjust font size */
          }
          .subtext {
            color: #666666; /* Dark Gray */
            font-size: 10px; /* Adjust font size */
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeMessage;
