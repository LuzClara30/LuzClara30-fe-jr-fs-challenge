import React, { useState } from "react";
import FormUrlPage from "../users/formUrl/Page";
import UrlsPage from "../users/urls/Page";
import "./styles.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  // State to manage the collapsed state of the sidebar
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    // Toggle the collapsed state
    setCollapsed(!collapsed);
    // Toggle the "sidebar-open" class on the body
    document.body.classList.toggle("sidebar-open", !collapsed);
  };

  return (
    <Router>
      {/* Container for site content */}
      <div className="site-content">
        {/* Sidebar component */}
        <nav id="sidebar" className={collapsed ? "collapsed" : ""}>
          <ul>
            {/* Sidebar items */}
            <li>
              {/* Link to home */}
              <Link to="/">
                {/* Icon and text */}
                <div>
                  <img
                    className="icon"
                    width={20}
                    height={20}
                    src="/SideBarIcons/link.svg"
                    alt="logo"
                  />
                  <span className="text">URL shortener</span>
                </div>
              </Link>
            </li>
            <li>
              {/* Link to frequent URLs */}
              <Link to="/urls/">
                {/* Icon and text */}
                <div>
                  <img
                    className="icon"
                    width={20}
                    height={20}
                    src="/SideBarIcons/Add.svg"
                    alt="logo"
                  />
                  <span className="text">Top 100 URLs</span>
                </div>
              </Link>
            </li>
          </ul>
          {/* Button to toggle the sidebar */}
          <button id="toggle-sidebar" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<FormUrlPage />} />
          <Route path="/urls/" element={<UrlsPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Navbar;