const express = require("express");
const app = express();
// Инициализация роутов по веб-сокету
const WSServer = require("express-ws")(app);
// Широковещательная рассылка
const aWss = WSServer.getWss();
const PORT = process.env.PORT || 5000;

app.ws("/", (ws, req) => {
  console.log("Connected app.ws");
  ws.send("***Ты успешно подключился message by Server ***");
  ws.on("message", (msg) => {
    msg = JSON.parse(msg);
    switch (msg.method) {
      case "connection":
        connectionHandler(ws, msg);
        break;
      case "message":
        break;
    }
  });
});

app.listen(PORT, () => console.log(`App started on port ${PORT}`));

const connectionHandler = (ws, msg) => {
  ws.id = msg.id;
  broadcastConnection(ws, msg);
};

const broadcastConnection = (ws, msg) => {
  aWss.clients.forEach((client) => {
    if (client.id === msg.id) {
      client.send(`Пользователь ${msg.name} подключился`);
    }
  });
};
