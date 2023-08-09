const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  //   res.send("Hello~" + port);
  const data = { message: "Hello from the backend!" };
  res.json(data);
});
