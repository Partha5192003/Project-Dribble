import { useState } from "react";
import Image from "next/image";

const AvatarSection = ({ onImageChoose }) => {
  const [showDefaults, setShowDefaults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDefault, setSelectedDefault] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDefaultsClick = () => {
    setShowDefaults(!showDefaults);
    setShowModal(true);
  };

  const handleChooseImage = (event) => {
    const file = event.target.files[0];
    if (file && file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedDefault(null); // Reset selected default
        setShowModal(false);
        setSelectedImage(e.target.result); // Set selected image
        onImageChoose(); // Notify parent component
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDefaultImageClick = (defaultImage) => {
    setSelectedDefault(defaultImage);
    setShowModal(false);
    setSelectedImage(null); // Reset selected image
    onImageChoose(); // Notify parent component
  };

  return (
    <>
      <div className="avatar-container">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Avatar"
            className="avatar"
            width={150}
            height={150}
          />
        ) : selectedDefault ? (
          <Image
            src={selectedDefault}
            alt="Avatar"
            className="avatar"
            width={150}
            height={150}
          />
        ) : (
          <Image
            src="/images/user.png"
            alt="Avatar"
            className="avatar"
            width={150}
            height={150}
          />
        )}
        <div className="avatar-buttons">
          <div className="choose-image-button">
            <label htmlFor="choose-image" className="button-label">
              Choose Image
              <input
                type="file"
                id="choose-image"
                accept="image/*"
                onChange={handleChooseImage}
                style={{ display: "none" }}
              />
            </label>
          </div>
          <div className="defaults-container">
            <p className="or-choose-defaults" onClick={handleDefaultsClick}>
              &gt; Or choose one of our defaults
            </p>
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <div className="default-images">
                <Image
                  src="/images/av1.png"
                  alt="Default 1"
                  className={
                    selectedDefault === "/images/av1.png"
                      ? "selected default-image"
                      : "default-image"
                  }
                  onClick={() => handleDefaultImageClick("/images/av1.png")}
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/av2.png"
                  alt="Default 2"
                  className={
                    selectedDefault === "/images/av2.png"
                      ? "selected default-image"
                      : "default-image"
                  }
                  onClick={() => handleDefaultImageClick("/images/av2.png")}
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/av4.png"
                  alt="Default 4"
                  className={
                    selectedDefault === "/images/av4.png"
                      ? "selected default-image"
                      : "default-image"
                  }
                  onClick={() => handleDefaultImageClick("/images/av4.png")}
                  width={100}
                  height={100}
                />
                {/* Add width and height props to other Image components */}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .avatar-container {
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 20px;
        }
        .avatar-buttons {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
        }
        .choose-image-button {
          align-self: flex-start;
          margin-bottom: 20px;
        }
        .button-label {
          background-color: #000000;
          color: #ffffff;
          padding: 8px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .button-label:hover {
          background-color: #222222;
        }
        .defaults-container {
          text-align: center;
        }
        .or-choose-defaults {
          font-size: 14px;
          color: #000000;
          cursor: pointer;
          margin-bottom: 10px;
          text-decoration: none;
        }
        .default-images {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        .default-image {
          width: 100px;
          height: 100px;
          border-radius: 5px;
          object-fit: cover;
        }

        /* Modal styles */
        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background-color: #fefefe;
          margin: 15% auto;
          padding: 20px;
          border-radius: 20px;
          border: 1px solid #888;
          width: 50%;
        }

        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }

        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .avatar {
            width: 100px;
            height: 100px;
            margin-right: 10px; /* Reduced margin for better spacing */
          }
          .defaults-container {
            text-align: center;
          }
          .or-choose-defaults {
            font-size: 14px;
            color: #000000;
            cursor: pointer;
            margin-bottom: 10px;
            text-decoration: none;
          }
          .default-images {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default AvatarSection;
