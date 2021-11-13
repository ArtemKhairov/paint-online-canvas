const express = require("express");
const app = express();
const WSServer = require("express-ws")(app);

const PORT = process.env.PORT || 5000;

app.ws("/", (ws, req) => {
  console.log("Connected app.ws");
  ws.send("***Ты успешно подключился message by Server ***");
  ws.on("message", (msg) => {
    console.log(msg);
  });
});

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
