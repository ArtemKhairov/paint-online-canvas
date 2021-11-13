import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvas from "../styles/canvas.scss";

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    // делается снимок текущего состояния
    // и добавляется в массив
    canvasState.pushToUndo(canvasRef.current.toDataURL());
  };

  return (
    <div className="canvas">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        // после каждого нажатия на полотне
        onMouseDown={() => mouseDownHandler()}
      />
    </div>
  );
});

export default Canvas;
