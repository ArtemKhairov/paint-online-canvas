export default class Tool {
  constructor(canvas) {
    // Ссылка на канвас
    this.canvas = canvas;
    // Контекст
    // позволяет воспроизводить манипуляции на канвасе
    this.ctx = canvas.getContext("2d");
  }

  // сеттер цвета
  set fillColor(color) {
    this.ctx.fillStyle = color;
  }

  // сеттер цвета обводки
  set strokeColor(color) {
    this.ctx.stokeStyle = color;
  }

  // сеттер ширины линии
  set lineWidth(width) {
    this.ctx.lineWidth = width;
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
