import { AIresponse } from "../main.mjs"
import { SystemPrompt,UserPrompt,AssistantPrompt} from "./prompt.mjs"

const temperature = 0;

const main = async () => {
    //    // ローディングインジケーターを表示
    //    document.getElementById("loading").style.display = "block";
       // AIresponse の結果を待ってから result に代入
       const result = await AIresponse(SystemPrompt, UserPrompt,AssistantPrompt,temperature);
       // ローディングインジケーターを非表示
    //    document.getElementById("loading").style.display = "none";
    //    // result を返すと、Promise が resolve される
       return result;
  };
  
export const EVALUATION = await main();

// main 関数の結果をログに出力する
console.log(EVALUATION);
