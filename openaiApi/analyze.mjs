import { AIresponse } from "./main.mjs";

export const analyze = async (systemPrompt, userPrompt) => {
  const result = await AIresponse(systemPrompt, userPrompt);
  return result;
};
