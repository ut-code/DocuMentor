import express from "express";
import { callOpenaiApi } from "../openaiApi/callOpenaiApi.mjs";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/setting", async (request, response) => {
  try {
    // TODO: 文面作る処理。
    const message = await callOpenaiApi("You are a helpful assistant", "これはテストです。「評価基準を受け取った」という言葉のあと、任意の駄洒落を回答してください") // TODO:この結果をどっかに保存
    response.json({ message: message }); //いらん
    // TODO: 余裕あればバックグラウンドで回す
    console.log(`messageは ${message}`)
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
})

app.post("/send-email", async (request, response) => {
  try {
    const email = request.body.email;
    const message = await callOpenaiApi("You are a helpful assistant", email)
    response.json({ message: message });
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
});

app.listen(3000);
