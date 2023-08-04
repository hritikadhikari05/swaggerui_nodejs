/* create server with swagger and morgan dev */
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const morgan = require("morgan");

const docs = require("./docs");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(docs)
);

app.use("/posts", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
