import { AIresponse } from "../main.mjs"
import { SystemPrompt,UserPrompt} from "./prompt.mjs"

const main = async () => {
    //    // ローディングインジケーターを表示
    //    document.getElementById("loading").style.display = "block";
       // AIresponse の結果を待ってから result に代入
       const result = await AIresponse(SystemPrompt, UserPrompt);
       // ローディングインジケーターを非表示
    //    document.getElementById("loading").style.display = "none";
    //    // result を返すと、Promise が resolve される
       console.log(result);
  };
  
main();
//   export const response = main();