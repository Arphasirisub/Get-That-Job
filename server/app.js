import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

function init() {
  dotenv.config();
  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

init();
