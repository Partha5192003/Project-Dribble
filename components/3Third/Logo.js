import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo-container">
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="logo"
        width={80}
        height={60}
      />
      <div className="button-container">
        <Link href="/create-profile">
          <button className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </Link>
      </div>
      <style jsx>{`
        .logo-container {
          position: absolute;
          top: 5px;
          left: 30px;
          display: flex;
          align-items: center; /* Align items vertically */
        }
        .logo {
          width: 100px; /* Adjust size as needed */
          height: auto;
          margin-right: 20px; /* Add margin to separate logo and button */
        }
        .button-container {
          background-color: #f3f3f3; /* Gray background color */
          padding: 2px; /* Add padding */
          border-radius: 5px; /* Add border radius */
        }
        .back-button {
          background-color: transparent;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 5px; /* Add padding to button */
        }
        .back-button svg {
          width: 24px;
          height: 24px;
        }
        @media (max-width: 768px) {
          .logo {
            width: 80px;
            margin-right: 10px; /* Reduced margin for better spacing */
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
