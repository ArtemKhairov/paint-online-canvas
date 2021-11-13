import { makeAutoObservable } from "mobx";

class canvasState {
  canvas = null;
  // действия,которые когда-либо делались
  undoList = [];
  // действия которые были отменены
  redoList = [];
  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }

  pushToUndo(data) {
    this.undoList.push(data);
  }

  pushToRedo(data) {
    this.redoList.push(data);
  }

  // Управление состоянием
  // отмена действия
  undo() {
    let ctx = this.canvas.getContext("2d");
    // если есть дейтсвие до,то вернуть предыдущий вид
    if (this.undoList.length > 0) {
      let dataURL = this.undoList.pop();
      let img = new Image();
      img.src = dataURL;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
      // если ничего нет, то очистить полотно
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  // возврат
  redo() {}
}

export default new canvasState();
