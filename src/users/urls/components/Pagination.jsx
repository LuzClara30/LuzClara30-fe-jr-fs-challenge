import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, handlePageChange, totalPages }) => {
  // Checking if the previous and next buttons should be shown
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;

  return (
    // Rendering the pagination buttons
    <div className="pagination">
      {/* Show previous button if showPrevious is true */}
      {showPrevious && (
        <button
          className="arrow"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <img src={"/arrow-left.svg"} alt="Previous Page" />
        </button>
      )}
      {/* Render buttons for each page */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          // Apply "active" class to the button if it represents the current page
          className={currentPage === index + 1 ? "active" : ""}
        >
          {/* Display the page number */}
          {index + 1}
        </button>
      ))}
      {/* Show next button if showNext is true */}
      {showNext && (
        <button
          className="arrow"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <img src={"/arrow-right.svg"} alt="Previous Page" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
