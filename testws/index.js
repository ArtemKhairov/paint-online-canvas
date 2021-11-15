let btn = document.getElementById("3070");
const socket = new WebSocket("ws://localhost:5000");

socket.onopen = () => {
  // console.log("Соединение с сервером установлено");
  socket.send(
    JSON.stringify({
      method: "connection",
      id: "1",
      name: "Artem",
    })
  );
};

socket.onmessage = (event) => {
  console.log("We have new message CAP", event.data);
};

btn.onclick = (e) => {
  // socket.send('Hello server *by user*')
  socket.send(
    JSON.stringify({
      method: "message",
      message: "Give me 2080 Ti",
      name: "Artem",
      id: "1",
    })
  );
};
