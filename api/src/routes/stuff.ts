import express from "express";
import * as stuffCtrl from "../controllers/stuff";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "successful get" });
});

router.post("/", stuffCtrl.createThing);

export default router;
