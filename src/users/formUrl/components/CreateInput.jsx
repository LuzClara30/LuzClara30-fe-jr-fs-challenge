import React from "react";
import "./CreateInput.css";
const CreateInput = ({ url, handleInputChange, handleSubmit }) => {
  return (
    // Display the input field and submit button
    <div className="containerInput">
      {/* to enter the url shorten */}
      <input
        className="input"
        type="text"
        placeholder="Enter full URL"
        value={url}
        onChange={handleInputChange}
      />
      {/* to submit the url shorten */}
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
export default CreateInput;
