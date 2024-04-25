import React, { useState, useEffect } from "react";
import { getAllUrls } from "./services/urls.services";// Importing the getAllUrls function
import UrlsList from "./components/UrlsList";// Importing the UrlsList component
import "./Page.css"
const UrlsPage = () => {
  // Using useState to manage the state of 'urls' and 'setUrls'
  const [urls, setUrls] = useState([]);
  // Using useEffect to fetch the URLs from the server
  useEffect(() => {
    // Calling the getAllUrls function to fetch the URLs
    getAllUrls().then((data) => {
      // Updating the state of 'urls' with the fetched data
      setUrls(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Top 100 URLs</h1>
      <p className="description">
        This is a list of the most frequently visited URLs:
      </p>
      {/* Conditional rendering: showing loading message if URLs are being fetched, otherwise rendering UrlsList component */}
      <div className="section">
        {urls?.length ? <UrlsList urls={urls} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};
export default UrlsPage;
