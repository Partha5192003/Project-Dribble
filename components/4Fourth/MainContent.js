// Main Content Component
import Image from "next/image";

const MainContent = ({ email }) => {
  return (
    <div className="main-content">
      <h1>Please verify your email...</h1>
      <div className="email-verification">
        <div className="mail-icon-container">
          <Image
            src="/images/mail.png"
            alt="Mail Icon"
            className="mail-icon"
            width={100}
            height={80}
          />
        </div>
        <p>
          Please verify your email address. We&apos;ve sent a confirmation email
          to:
        </p>
        <p className="email-address">
          <b>account@refero.design</b>
        </p>{" "}
        {/* Added email address in bold */}
        <p>
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="resend-email">
          Didn&apos;t receive the email? Check your Spam folder, it may have
          been caught by a filter. {/* Added space */}
          <br /> {/* Added space */}
          If you still don&apos;t see it, you can{" "}
          <span className="resend-link">
            <b>resend the confirmation email.</b>
          </span>{" "}
          {/* Made pink text bold */}
        </p>
        <p className="change-email">
          <b>Wrong email address?</b> {/* Made pink text bold */}
          <span className="change-link">
            <b>Change it.</b>
          </span>{" "}
          {/* Made pink text bold */}
        </p>
      </div>
      <style jsx>{`
        /* Your CSS styling for the main content goes here */

        .main-content {
          text-align: center;
          margin-top: 50px;
          width: 100%;
          overflow-y: hidden;
        }
        .email-verification {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center; /* Center vertically */
          justify-content: center;
        }
        .mail-icon-container {
          width: 150px;
          height: 50px;
          padding: 20px 20px;
          display: flex;
          align-items: center; /* Center vertically */
          justify-content: center; /* Center horizontally */
          animation: rotateMail 2s infinite alternate;
        }
        @keyframes rotateMail {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
        .email-address {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .resend-email,
        .change-email {
          color: #666666;
          margin-top: 10px;
        }
        .resend-link,
        .change-link {
          color: #ff4081;
          cursor: pointer;
          font-weight: bold;
        }
        @media screen and (max-width: 1000px) {
          .main-content {
            text-align: center;
            margin-top: 50px;
            width: 100%;
            overflow-y: hidden;
          }
          .email-verification {
            margin-top: 20px;
            font-size: 14px;
          }
          .mail-icon {
            width: 150px;
            height: 50px;
            padding: 10px 10px;
            height: auto;
            animation: rotateMail 2s infinite alternate; /* Added animation */
          }
        }
      `}</style>
    </div>
  );
};
export default MainContent;
