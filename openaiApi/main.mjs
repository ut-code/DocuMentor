import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai'; //apiキーの取得


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); //apiキーの設定

export const AIresponse = async (SystemPrompt,UserPrompt) => {
  const aiResult = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: SystemPrompt },
      { role: "user", content: UserPrompt },
    ],
    max_tokens: 2048,
  });
  return aiResult.choices[0]?.message?.content?.trim() ?? "Sorry, there was an error.";
}; //AIの回答をだす関数