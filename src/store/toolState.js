import { makeAutoObservable } from "mobx";

class ToolState {
  tool = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool) {
    this.tool = tool;
  }

  // Меняем все значения у контекста
  // цвет заливки
  setFillColor(color) {
    this.tool.fillColor = color;
  }

  // цвет обводки
  setStrokeColor(color) {
    this.tool.strokeColor = color;
  }

  // толщина линий
  setLineWidth(width) {
    this.tool.lineWidth = width;
  }
}

export default new ToolState();
