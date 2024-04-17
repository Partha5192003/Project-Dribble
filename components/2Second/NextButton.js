import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NextButton = ({ isButtonActive }) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && isButtonActive) {
        // Navigate to ThirdPage using Next.js router programmatically
        if (isButtonActive) {
          router.push("/ThirdPage");
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [isButtonActive, router]);

  return (
    <div>
      {/* Using Next.js Link for Single Page Application behavior */}
      <Link href="/ThirdPage">
        <button
          className={`next-button ${isButtonActive ? "" : "disabled"}`}
          disabled={!isButtonActive}
        >
          Next
        </button>
      </Link>
      {/* Display "Or Press Enter" only when location and image are chosen */}
      {isButtonActive && (
        <p className="or-press-return">
          &gt; Or press <strong>Enter</strong> to proceed
        </p>
      )}

      <style jsx>{`
        .next-button {
          margin-top: 20px;
          padding: 10px 30px;
          background-color: #ff4081; /* Pink */
          color: #ffffff; /* White */
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        .next-button:disabled {
          opacity: 0.6; /* Dull the button when disabled */
          cursor: not-allowed;
        }

        .next-button:hover:not(:disabled) {
          background-color: #ff4081; /* Pink */
          color: #ffffff; /* White */
        }

        .or-press-return {
          font-size: 14px;
          color: #666666; /* Dark Gray */
          margin-top: 10px;
        }
        /* Adjusted font-size for smaller screens */
        @media (max-width: 768px) {
          .next-button {
            font-size: 14px;
            padding: 8px 20px; /* Reduced padding for smaller button */
          }
        }
      `}</style>
    </div>
  );
};

export default NextButton;
