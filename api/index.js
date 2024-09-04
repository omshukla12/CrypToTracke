const Express = require("express");
const dbConnection = require("./dbConnection");
const app = Express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello friend." });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1", require("./router/routes"));

app.listen(PORT, () => {
  dbConnection();
  console.log(`My app is listening on port ${PORT}`);
});
