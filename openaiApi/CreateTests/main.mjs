import { AIresponse } from "../main.mjs"


export const CreateTests = async (SystemPrompt,UserPrompt,AssistantPrompt) => {
     const result = await AIresponse(SystemPrompt, UserPrompt,AssistantPrompt,0.9);

     return result;
};