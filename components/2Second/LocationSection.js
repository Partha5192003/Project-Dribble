import { useState } from "react";

const LocationSection = ({ onLocationChange }) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onLocationChange(e.target.value);
  };

  return (
    <div className="location-section">
      <label htmlFor="location">ADD Your Location</label>
      <input
        type="text"
        id="location"
        placeholder="Enter a location"
        value={location}
        onChange={handleLocationChange}
      />
      <style jsx>{`
        .location-section {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Align to the left */
        }
        input {
          margin-top: 10px;
          padding: 10px;
          border: none; /* Remove border */
          border-bottom: 1px solid #000000; /* Black bottom line */
          width: 200px; /* Adjust width as needed */
          outline: none; /* Remove default input focus outline */
        }
        input::placeholder {
          color: #999999; /* Placeholder color */
        }
        label {
          font-weight: bold;
          color: #000000; /* Black */
          margin-bottom: 10px;
        }
        @media (max-width: 768px) {
          .location-section {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default LocationSection;
