import { AIresponse } from "../main.mjs"
import { SystemPrompt,UserPrompt,AssistantPrompt} from "./prompt.mjs"

const temperature = 0.9;
const main = async () => {
     const result = await AIresponse(SystemPrompt, UserPrompt,AssistantPrompt,temperature);

     return result;
};

export const Quiz = await main();

// main 関数の結果をログに出力する
console.log(Quiz);