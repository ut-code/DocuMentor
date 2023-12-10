import { AIresponse } from "./main.mjs";

export const callOpenaiApi = async (systemPrompt, userPrompt) => {
  const result = await AIresponse(systemPrompt, userPrompt);
  return result;
};
