import React from "react";

const FetchButton = ({ buttonText, fetchData }) => {
  return (
    <button className="fetch-button" onClick={fetchData}>
      {buttonText}
    </button>
  );
};

export default FetchButton;
