require("dotenv").config();

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const prompt = "ことわざを教えてください。"

const sampleFunc = async () => {
  const aiResult = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
    max_tokens: 2048,
  });
  console.log(aiResult.choices[0].message.content?.trim() || "Sorry, there was an error."); //new
};

sampleFunc();
