import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = ({ avatarLink, isLogin }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Image
          src="/images/logo.png"
          alt="Logo"
          className="logo"
          width={80}
          height={60}
        />
        <ul className="nav-links">
          <li>Inspiration</li>
          <li>Find Work</li>
          <li>Learn Design</li>
          <li>Go Pro</li>
          <li>Hire Designers</li>
        </ul>
      </div>
      <div className="user-actions">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="avatar-container">
          <Image
            src="/images/user.png"
            alt="Avatar"
            className="avatar"
            width={40}
            height={40}
          />
        </div>
        {isLogin && (
          <div className="avatar-container">
            <Image
              src={avatarLink}
              alt="Avatar"
              className="avatar"
              width={40}
              height={40}
            />
          </div>
        )}
        <button className="upload-button">Upload</button>
      </div>
      <hr className="separator" />
      <style jsx>{`
        .navbar {
          background-color: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          margin-right: 0;
          width: 100%;
          overflow-y: hidden;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .logo {
          width: 50px;
          height: auto;
        }
        .nav-links {
          display: flex;
          list-style: none;
          margin-left: 20px;
          margin-top: 12px;
        }
        .nav-links li {
          margin-right: 20px;
          cursor: pointer;
        }
        .user-actions {
          display: flex;
          align-items: center;
        }
        .search-bar {
          display: flex;
          align-items: center;
          background-color: #f3f3f3; /* Cream color from footer */
          border-radius: 5px;
          padding: 4px 15px;
          border-radius: 50px;
          margin-top: 5px;
        }
        .search-icon {
          color: #666666;
          margin-right: 8px;
        }
        .search-input {
          padding: 8px 12px;
          border: none;
          background: none;
          outline: none;
          width: 150px; /* Adjust as needed */
        }
        .avatar-container {
          margin-right: 0px; /* Adjust spacing */
          margin-left: 20px;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .upload-button {
          background-color: #ff4081;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          padding: 8px 16px;
          cursor: pointer;
          margin-left: 20px;
        }
        .separator {
          border: none;
          border-top: 1px solid #cccccc;
          width: 100%;
          margin-top: 10px;
        }
        @media screen and (max-width: 1000px) {
          .nav-links,
          .avatar-container,
          .upload-button {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
