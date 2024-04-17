import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Image
            src="/images/logo.png"
            alt="Footer Logo"
            className="footer-logo"
            width={80}
            height={60}
          />
          <p>
            Dribbble is the world&apos;s leading community for creatives to
            share, grow, and get hired.
          </p>
          <div className="social-icons">
            {/* Add social icons here */}
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faPinterest} className="social-icon" />
          </div>
        </div>
        <div className="footer-right">
          <div className="column">
            <p className="column-title">For designers</p>
            <ul>
              <li>Go Pro!</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime podcast</li>
              <li>Playoffs</li>
              <li>Weekly Warm-Up</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>
          </div>
          <div className="column">
            <p className="column-title">Hire designers</p>
            <ul>
              <li>Post a job opening</li>
              <li>Post a freelance project</li>
              <li>Search for designers</li>
              <p className="column-title">Brands</p>
              <li>Advertise with us</li>
            </ul>
          </div>
          <div className="column">
            <p className="column-title">Company</p>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Media kit</li>
              <li>Testimonials</li>
              <li>API</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
          <div className="column">
            <p className="column-title">Directories</p>
            <ul>
              <li>Design jobs</li>
              <li>Designers for hire</li>
              <li>Freelance designers for hire</li>
              <li>Tags</li>
              <li>Places</li>
              <p className="column-title">Design assets</p>
              <li>Dribbble Marketplace</li>
              <li>Creative Market</li>
              <li>Fontspring</li>
              <li>Font Squirrel</li>
            </ul>
          </div>
          <div className="column">
            <p className="column-title">Design Resources</p>
            <ul>
              <li>Freelancing</li>
              <li>Design Hiring</li>
              <li>Design Portfolio</li>
              <li>Design Education</li>
              <li>Creative Process</li>
              <li>Design Industry</li>
              <li>Trends</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p className="left">&copy; 2023 Dribbble. All rights reserved.</p>
        <p className="right">
          <b>20,501,853</b> shots dribbled
        </p>
        <Image
          src="/images/icon.png"
          alt="Short Icon"
          className="short-icon"
          width={30}
          height={30}
        />
      </div>
      <style jsx>{`
        /* Your CSS styling for the footer goes here */
        /* Assuming you have FontAwesome icons styling */

        .footer {
          width: 100%;
          background-color: #f3f3f3;
          padding: 20px;
          text-align: left;
          overflow-y: hidden;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-left: 30px;
        }
        .footer-left {
          flex: 1.8;
          margin-right: 60px;
        }
        .footer-right {
          display: flex;
          flex-wrap: wrap;
          flex: 7;
        }
        .footer-logo {
          width: 100px;
          height: auto;
          margin-bottom: 0px;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          justify-content: space-between;
          margin-right: 80px;
          margin-left: 0px;
        }
        .social-icon {
          font-size: 24px; /* Adjust size as needed */
          margin: 10px 10px; /* Adjust spacing as needed */
          color: #333; /* Adjust color as needed */
          padding: 10px 10px;
        }
        .copyright {
          display: flex;
          justify-content: space-between; /* Align left and right */
          align-items: center;
        }
        .copyright p {
          margin: 10px 10px;
        }
        .short-icon {
          width: 30px;
          height: 30px;
        }
        .column {
          margin-bottom: 20px;
          flex: 1;
        }
        .column-title {
          font-weight: bold;
        }
        .column ul {
          list-style: none;
          padding: 0;
        }
        .column ul li {
          margin-bottom: 5px;
        }
        .column ul li b {
          color: #ff4081;
        }
        .left {
          flex: 1; /* Take up the remaining space on the left */
          text-align: left;
        }
        .right {
          text-align: right;
        }
        @media (max-width: 768px) {
          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center; /* Center content on smaller screens */
            text-align: center; /* Center text on smaller screens */
          }
          .footer-left,
          .footer-right {
            flex: 4; /* Equal width for both sections on smaller screens */
            margin: 0; /* Remove margin on smaller screens */
          }
          .footer-right {
            margin-top: 20px; /* Add margin between sections on smaller screens */
          }
          .column {
            margin-bottom: 20px;
            flex: 1;
            max-width: 250px; /* Limit column width on smaller screens */
          }
          .social-icons {
            margin-right: auto;
            margin-left: auto; /* Center social icons on smaller screens */
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
