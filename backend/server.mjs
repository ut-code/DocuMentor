import express from "express";
import { analyze } from "../api/analyze.mjs";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/send-email", async (request, response) => {
  try {
    const email = request.body.email;
    const message = await analyze("You are a helpful assistant", email)
    response.json({ message: message });
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
});

app.listen(3000);
