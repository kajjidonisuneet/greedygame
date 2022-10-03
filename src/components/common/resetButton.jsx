import React from "react";

const ResetButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" text-black font-normal py-2 px-4 rounded hover:bg-slate-200"
    >
      Reset
    </button>
  );
};

export default ResetButton;
