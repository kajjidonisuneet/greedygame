import React from "react";
import board from "../../asset/board.png";

const NoDataToDisplay = () => {
  return (
    <div className="flex items-center justify-center my-16">
      <img src={board} alt="" className="w-1/4" />
      <div className="m-10">
        <p className="text-3xl">Hey! Something's off!</p>
        <p className="text-3xl" >We couldn't display the given data.</p>
        <p className="leading-10 text-gray-500 text-xl">Try changing your filters or selecting a different date.</p>
      </div>
    </div>
  );
};

export default NoDataToDisplay;
