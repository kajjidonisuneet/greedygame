import React from "react";
import board from '../../asset/board.png'

const NoDataToDisplay = () => {
  return (
    <div className="flex items-center">
      <div>
        <img src={board} alt="" className="max-w-[60%]"/>
      </div>
      <div>
        <p>Hey! Something's off!</p>
        <p>We couldn't display the given data</p>
        <p>Try changing your filters ir selecting a different date</p>
      </div>
    </div>
  );
};

export default NoDataToDisplay;
