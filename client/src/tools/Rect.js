import Tool from "./Tool";

export default class Rect extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  mouseDownHandler(e) {
    this.mouseDown = true;
    this.ctx.beginPath();
    // стартовая X
    this.startX=e.pageX - e.target.offsetLeft
    // стартовая Y
    this.startY=e.pageY - e.target.offsetTop
    // Сохранение изображения
    this.saved=this.canvas.toDataURL()
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      let currentX=e.pageX - e.target.offsetLeft
      let currentY=e.pageY - e.target.offsetTop
      let width=currentX-this.startX
      let height=currentY-this.startY
      this.draw(this.startX,this.startY,width,height);
    }
  }

  // координаты
  // ширина и высота
  draw(x, y,w,h) {
    // Создание нового изображения
    const img=new Image()
    img.src=this.saved
    img.onload=()=>{
      // Очищаем канвас
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
      // Возвращаем рисунки
      this.ctx.drawImage(img,0,0,this.canvas.width,this.canvas.height)
      this.ctx.beginPath()
      this.ctx.rect(x,y,w,h)
      this.ctx.fill()
      this.ctx.stroke()

    }

    // Создание 4-х угольника
    this.ctx.rect(x,y,w,h)
    // Заполнение цветом
    this.ctx.fill()
    // Обводка
    this.ctx.stroke()
  }
}
