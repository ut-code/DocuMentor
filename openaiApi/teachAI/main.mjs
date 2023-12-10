import { AIresponse } from "../main.mjs"


export const teachAI = async (SystemPrompt,UserPrompt) => {
     const result = await AIresponse(SystemPrompt, UserPrompt,"",0.7);

     return result;
};