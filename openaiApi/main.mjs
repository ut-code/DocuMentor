import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai'; //apiキーの取得


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); //apiキーの設定

export const AIresponse = async (SystemPrompt,UserPrompt,AssistantPrompt,temperature) => {
  const aiResult = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: SystemPrompt },
      { role: "user", content: UserPrompt },
      { role: "assistant", content: AssistantPrompt },
    ],
    max_tokens: 2048,
    temperature: temperature,
  });
  const result =  await aiResult.choices[0]?.message?.content?.trim() ?? "Sorry, there was an error.";

  return result
}; //AIの回答をだす関数