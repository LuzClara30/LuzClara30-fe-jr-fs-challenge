import React, { useState } from "react";
import CreateInput from "./components/CreateInput";
import "./Page.css";
import { createShortUrl } from "./services/formUrl.services";
import Result from "./components/Result";
import { notifyError } from "../../utilities/notifyError";
const FormUrlPage = () => {
  // Define a state to store the input value
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  // Function to handle changes in input
  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  // Function to handle form submission to call the createShortUrl function
  const handleSubmit = (event) => {
    // Reset the short URL state
    setShortUrl("");
    // Prevent the default behavior of the form
    event.preventDefault();
    // Call the createShortUrl function from the services
    createShortUrl(url)
      .then((data) => {
        // Check if the short URL is available
        if (data.short_code) {
          setShortUrl(data.short_code);
        } else {
          // Notify the user if there are any errors
          notifyError(data.errors);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    // Display the form
    <div className="container">
      <h1 className="title">URL Shortener</h1>
      <div className="section">
        {/*  Pass the input value, input change handler, and form submission handler to the CreateInput component */}
        <CreateInput
          url={url}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        {
          /* Display the result component only if the short URL is available */
          shortUrl && <Result url={shortUrl} />
        }
      </div>
    </div>
  );
};
export default FormUrlPage;
