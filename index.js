const express = require("express");
const app = express();
const port = 3100;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Dùng để lắng nghe và khởi chạy tại cổng port
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy ở cổng http://localhost:${port}, click vào để xem`);
});
