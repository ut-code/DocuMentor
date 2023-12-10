import { AIresponse } from "../main.mjs"

export const analyze = async (SystemPrompt,UserPrompt) => {
       const result = await AIresponse(SystemPrompt, UserPrompt,"",0);
      
       return result;
  };