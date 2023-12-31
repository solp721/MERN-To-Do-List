const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.get("/", (req, res) => res.send("API 연동 완료"));

app.use(
  express.json({
    extended: false,
  })
);

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/post", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`1. 포트 번호: ${PORT}`));
