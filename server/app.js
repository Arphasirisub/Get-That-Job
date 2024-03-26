import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import { professionalRouter } from "./routers/professionalRouter";
export const prisma = new PrismaClient();
function init() {
  dotenv.config();
  const app = express();
  const port = 4000;


  app.use(cors());
  app.use(bodyParser.json());

  app.use("/professional", professionalRouter);

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

init();
