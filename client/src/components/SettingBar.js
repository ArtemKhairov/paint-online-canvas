import React from "react";
import "../styles/toolbar.scss";
import toolState from "../store/toolState"

const SettingBar = () => {
  return (
    <div className="toolbar" style={{ top: "40px" }}>
      <label htmlFor="line-width"> Толщина линии</label>
      <input
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        min={1}
        max={50}
        defaultValue={1}
        onChange={(e)=>toolState.setLineWidth(e.target.value)}
      />
      <label htmlFor="canvas-color"> Цвет обводки</label>
      <input
        style={{ margin: "0 10px" }}
        id="canvas-color"
        type="color"
        onChange={(e)=>toolState.setStrokeColor(e.target.value)}
      />
    </div>
  );
};

export default SettingBar;
