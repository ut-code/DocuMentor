import { AIresponse } from "../main.mjs"
import { SystemPrompt,UserPrompt,AssistantPrompt} from "./prompt.mjs"
const temperature = 0.7;
const main = async () => {
     const result = await AIresponse(SystemPrompt, UserPrompt,AssistantPrompt,temperature);

     return result;
};

export const text = await main();

