import React from "react";

const ApplyButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
    >
      {label}
    </button>
  );
};
// add on click to submit
export default ApplyButton;
