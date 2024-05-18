import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import { authRouter } from "./routers/authRouter.js";
import { auth } from "express-openid-connect";
export const prisma = new PrismaClient();
function init() {
  dotenv.config();
  const app = express();
  const port = 3000;

  // const { auth } = require("express-openid-connect");

  const config = {
    authRequired: false,
    auth0Logout: true,
    secret: "a long, randomly-generated string stored in env",
    baseURL: "http://localhost:3000",
    clientID: "Ekx5urzQzjqGuityeI46eDKYSxELgfAo",
    issuerBaseURL: "https://dev-ql4nuvptsqfnw7yf.us.auth0.com",
  };

  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(config));

  // req.isAuthenticated is provided from the auth router
  app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  });

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/auth", authRouter);

  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
}

init();
