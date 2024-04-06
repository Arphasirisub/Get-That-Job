import { Router } from "express";
// import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const authRouter = Router();
const prisma = new PrismaClient();

//login
authRouter.post("/login", async (req, res) => {
  try {
    const user = await prisma.professionalUser.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "password not valid",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "900000",
      }
    );
    return res.json({
      message: "login succesfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//register
authRouter.post("/professional/register", async (req, res) => {
  console.log("Received registration request:", req.body);
  const {
    email,
    password,
    name,
    phone,
    birthday,
    linkedinUrl,
    Title,
    experience,
    education,
    cvImage,
  } = req.body;

  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  req.body.password = await bcrypt.hash(req.body.password, salt);
  try {
    const user = await prisma.professionalUser.create({
      data: {
        email,
        password,
        name,
        phone,
        birthday,
        linkedinUrl,
        Title,
        experience,
        education,
        cvImage,
      },
    });
    console.log("User registered:", user);
    return res.status(200).json({ message: "register completed !" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
