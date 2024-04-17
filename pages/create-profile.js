// pages/create-profile.js
import Head from "next/head";
import Logo from "../components/2Second/logo";
import WelcomeMessage from "../components/2Second/WelcomeMessage";
import AvatarSection from "../components/2Second/AvatarSection";
import LocationSection from "../components/2Second/LocationSection";
import NextButton from "../components/2Second/NextButton";
import { useState } from "react";

const CreateProfile = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [location, setLocation] = useState("");
  const [imageChosen, setImageChosen] = useState(false);

  const handleLocationChange = (locationValue) => {
    setLocation(locationValue);
    updateButtonState(locationValue, imageChosen);
  };

  const updateButtonState = (location, imageChosen) => {
    setIsButtonActive(location && imageChosen);
  };

  const handleImageChoose = () => {
    // Handle choose image functionality
    setImageChosen(true);
    updateButtonState(location, true);
  };

  return (
    <div className="container">
      <Head>
        <title>Dribble</title>
      </Head>
      <div className="content">
        <Logo />
        <WelcomeMessage />
        <AvatarSection onImageChoose={handleImageChoose} />
        <LocationSection onLocationChange={handleLocationChange} />
        <NextButton isButtonActive={isButtonActive} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #ffffff; /* Black and white page */
        }
        .content {
          width: 50%; /* 25% space from left and right */
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default CreateProfile;
