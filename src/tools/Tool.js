export default class Tool {
  constructor(canvas) {
    // Ссылка на канвас
    this.canvas = canvas;
    // Контекст
    // позволяет воспроизводить манипуляции на канвасе
    this.ctx = canvas.getContext("2d");
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
