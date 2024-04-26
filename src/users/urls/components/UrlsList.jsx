import React, { useState } from "react";
import "./UrlsList.css";
import Pagination from "./Pagination";
const ITEMS_PER_PAGE = 5; // Number of items to display per page

const UrlsList = ({ urls }) => {
  // Using useState to manage the state of 'currentPage' and 'setCurrentPage'
  const [currentPage, setCurrentPage] = useState(1);
  // Calculating the index of the last and first item to display on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  // Calculating the index of the first item
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  // Getting the current items to display on the current page
  const currentUrls = urls.slice(indexOfFirstItem, indexOfLastItem);
  // Calculating the total number of pages
  const totalPages = Math.ceil(urls.length / ITEMS_PER_PAGE);
  // Function to handle the page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Function to shorten the title
  const shortenTitle = (title) => {
    if (!title) return "No title";
    return title.length > 30 ? `${title.substring(0, 30)}...` : title;
  };
  return (
    <div className="urls-container">
      <table className="urls-table">
        <thead>
          <tr>
            {/* definition of table headers */}
            <th className="table-header">ID</th>
            <th className="table-header">Full url</th>
            <th className="table-header">Short url</th>
            <th className="table-header">Title</th>
            <th className="table-header">Click Count</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping over the currentUrls to display the data */}
          {currentUrls.map((item) => (
            <tr key={item.id}>
              {/*An item with its columns */}
              <td className="table-cell">{item.id}</td>
              <td className="table-cell item-href">
                <a href={item.full_url}>{item.full_url}</a>
              </td>
              <td className="table-cell">{item.short_url}</td>
              <td className="table-cell">{shortenTitle(item.title)}</td>
              <td className="table-cell">{item.click_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-mobile">
        {/* Mapping over the currentUrls to display the data */}
        {currentUrls.map((item) => (
          <div key={item.id} className="row">
            {/*An item with its columns */}
            <div className="column">
              <div className="header">ID</div>
              <div className="content">{item.id}</div>
            </div>
            <div className="column">
              <div className="header">Full url</div>
              <div className="content">
                <a href={item.full_url}>{item.full_url}</a>
              </div>
            </div>
            <div className="column">
              <div className="header">Short url</div>
              <div className="content">{item.short_url}</div>
            </div>
            <div className="column">
              <div className="header">Title</div>
              <div className="content">{shortenTitle(item.title)}</div>
            </div>
            <div className="column">
              <div className="header">Click Count</div>
              <div className="content">{item.click_count}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Rendering the Pagination component */}
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default UrlsList;
