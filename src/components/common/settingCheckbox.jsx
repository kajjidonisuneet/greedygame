import React from "react";

const SettingCheckBox = ({ value, onChange, checked, label }) => {
  return (
    <div className="inline">
      <label>
        <input
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={checked}
          className="hidden absolute"
        />
        <span className="inline-block m-2 bg-white text-gray-00 py-2 px-4 w-1/6 border border-gray-300 rounded hover:cursor-pointer">{label}</span>
      </label>
    </div>
  );
};

export default SettingCheckBox;

