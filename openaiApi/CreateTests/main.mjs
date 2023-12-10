import { AIresponse } from "../main.mjs"
import { SystemPrompt,UserPrompt} from "./prompt.mjs"

const main = async () => {
    const result = await AIresponse(SystemPrompt,UserPrompt);
    console.log(result);
  };
  

  main();