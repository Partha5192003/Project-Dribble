import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Logo from "../components/3Third/Logo";
import WelcomeMessage from "../components/3Third/WelcomeMessage";
import Card from "../components/3Third/Card";
import { useRouter } from "next/router";

const ThirdPage = () => {
  const [isAnyCardSelected, setIsAnyCardSelected] = useState(false);
  const [cardSelection, setCardSelection] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  const router = useRouter();

  useEffect(() => {
    setIsAnyCardSelected(
      Object.values(cardSelection).some((selected) => selected)
    );
  }, [cardSelection]);

  const handleCardSelect = (cardId, isSelected) => {
    const updatedCardSelection = { ...cardSelection, [cardId]: isSelected };
    setCardSelection(updatedCardSelection);
  };

  const handleFinish = () => {
    // Add logic for finishing
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && isAnyCardSelected) {
        router.push("/FourthPage");
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [isAnyCardSelected, router]);

  return (
    <div>
      <Head>
        <title>Dribble</title>
      </Head>
      <div className="container">
        <Logo />
        <div className="content">
          <WelcomeMessage />
          <div className="cards">
            <Card
              title="I'm a designer"
              description="Eager designer sharing my latest creations on Dribble, the ultimate source of inspiration with 7 million shots from designers worldwide."
              image="/images/img1.png"
              onCardSelect={(isSelected) =>
                handleCardSelect("card1", isSelected)
              }
              isSelected={cardSelection.card1}
            />
            <Card
              title="I'm looking to hire a designer"
              description="Seeking visionary designers on Dribble to bring ideas to life. Join the community shaping tomorrow's design landscape."
              image="/images/img2.png"
              onCardSelect={(isSelected) =>
                handleCardSelect("card2", isSelected)
              }
              isSelected={cardSelection.card2}
            />
            <Card
              title="Design Inspiration"
              description="With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration."
              image="/images/img3.png"
              onCardSelect={(isSelected) =>
                handleCardSelect("card3", isSelected)
              }
              isSelected={cardSelection.card3}
            />
          </div>
          <div>
            {isAnyCardSelected && (
              <p className="or-press-return1">
                Anything else? You can select multiple
              </p>
            )}
            <Link href="/FourthPage">
              <button
                className={`next-button ${isAnyCardSelected ? "" : "disabled"}`}
                disabled={!isAnyCardSelected}
              >
                Next
              </button>
            </Link>
            {/* Display "Or Press Enter" only when location and image are chosen */}
            {isAnyCardSelected && (
              <p className="or-press-return">
                &gt; Or press <strong>Enter</strong> to proceed
              </p>
            )}
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #ffffff;
            width: 90%;
            max-width: 800px;
          }
          .content {
            width: 100%;
            text-align: center;
          }
          .cards {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            gap: 20px;
          }
          .button-container {
            margin-top: 20px;
          }
          .next-button {
            margin-top: 5px;
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
            margin-top: 5px;
          }
          .or-press-return1 {
            font-size: 15px;
            font-weight: bold;
            color: #666666; /* Dark Gray */
            margin-top: 5px;
          }
          @media (max-width: 768px) {
            .cards {
              justify-content: center; /* Center cards on smaller screens */
            }
            .cards {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-top: 30px;
              gap: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ThirdPage;
