import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/send", (request, response) => {
  response.send(`${request.body.email}の送信を受け付けました`);
});

app.listen(3000);
