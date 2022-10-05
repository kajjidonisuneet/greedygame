import React, { Component } from "react";
import { GiSettingsKnobs } from "react-icons/gi";

class SettingButton extends Component {
  state = {};
  render() {
    return (
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => {
          this.props.onClick();
        }}        
      >
        <GiSettingsKnobs className="inline mr-2" size={20} color={'blue'}/>
        Setting
      </button>
    );
  }
}

export default SettingButton;
