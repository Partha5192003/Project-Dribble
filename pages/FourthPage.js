import { useState } from "react";
import Navbar from "../components/4Fourth/Navbar";
import MainContent from "../components/4Fourth/MainContent";
import Footer from "../components/4Fourth/Footer";
import Head from "next/head";

const FourthPage = () => {
  const [email, setEmail] = useState(""); // Replace with actual email value
  const avatarLink = ""; // Replace with actual avatar link
  const isLogin = false; // Replace with login status

  return (
    <div>
      <Head>
        <title>Dribble</title>
      </Head>
      <div className="container12">
        <Navbar avatarLink={avatarLink} isLogin={isLogin} />
        <MainContent email={email} />
        <Footer />
        <style jsx>{`
          .container12 {
            overflow-y: hidden; /* Hide the vertical scrollbar */
            /* You can also try adding more specificity */
          }
        `}</style>
      </div>
    </div>
  );
};

export default FourthPage;
