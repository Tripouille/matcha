import Debug from "debug";
const debug = Debug("api");
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const port = Number(process.env.SERVER_PORT);

app.listen(port, () => {
  debug(`Server started on port : ${port}`);
});