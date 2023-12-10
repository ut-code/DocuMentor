import express from "express";
const app = express();


import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const ejs = require("ejs");

require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

const fs = require("fs");
app.get("/", (request, response) => {
  response.send(fs.readFileSync("static/sample.html", "utf-8"));
});

const sampleFunc = async (prompt) => {
  prompt = fs.readFileSync("static/text.txt","utf-8") + fs.readFileSync("static/send/send.html","utf-8") + prompt ;
  const aiResult = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "与えられた指示に対して具体的にわかりやすく。HTMLファイルのみ出力して、その他のコメントは決してしないで。" },
      { role: "user", content: prompt },
    ],
    max_tokens: 2048,
  });
  return aiResult.choices[0].message.content?.trim() ; //new
};

const sampleFunc2 = async (prompt) => {
  prompt = "" + prompt ;
  const aiResult = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "与えられた指示に対して具体的にわかりやすく。HTMLファイルのみ出力して、その他のコメントは決してしないで。" },
      { role: "user", content: prompt },
    ],
    max_tokens: 2048,
  });
  return aiResult.choices[0].message.content?.trim() ; //new
};

app.post("/send", async(request, response) => {
  const res = await sampleFunc(request.body.email);
  //const template = fs.readFileSync("static/send/sample.ejs", "utf-8");
  //const index = ejs.render(template, {
  //  MAIL:request.body.email,
  //  RES: res,
  //});
  //response.send(index);
  response.send(res);
});

app.listen(3000);