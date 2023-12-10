import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/send-email", (request, response) => {
  const email = request.body.email;
  response.json({ message: "Nice Email." });
});

app.listen(3000);
