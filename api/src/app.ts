import express from "express";
import cors from "cors";
import stuffRoutes from "./routes/stuff";

const app = express();

const corsHandler = cors({
  origin: ["http://localhost:3000"],
});
app.use(corsHandler);
app.use(express.json());

app.use("/stuff", stuffRoutes);

export default app;
