// components/WelcomeMessage.js
const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h1>Welcome! Let&apos;s create your profile</h1>
      <p className="subtext">
        let other get to know you better! You can do these later
      </p>
      <style jsx>{`
        .welcome-message {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Align to the left */
        }
        h1 {
          font-weight: bold;
          font-size: 30px;
          color: #000000; /* Black */
          margin: 0; /* Ensure h1 starts from the left */
        }
        .subtext {
          margin-top: 10px;
          font-size: 14px;
          color: #000000; /* Black */
        }
        @media (max-width: 768px) {
          .welcome-message {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Align to the left */
          }
          h1 {
            font-weight: bold;
            font-size: 20px;
            color: #000000; /* Black */
            margin: 0; /* Ensure h1 starts from the left */
          }
          .subtext {
            margin-top: 10px;
            font-size: 13px;
            color: #000000; /* Black */
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeMessage;
