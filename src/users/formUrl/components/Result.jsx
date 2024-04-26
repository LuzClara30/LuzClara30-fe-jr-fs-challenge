import React from "react";
import "./Result.css";
const Result = ({ url }) => {
    return (
      <div className="containerResult">
        {/* show the result */}
        <input className="inputResult" type="text" value={url} readOnly />
        </div>
    );
};
export default Result;