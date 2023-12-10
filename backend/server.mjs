import express from "express";
import { AIresponse } from "../openaiApi/main.mjs";
import { SystemPrompt as SystemPromptforanalysis,UserPrompt as UserPromptforanalysis} from "../openaiApi/analysis_prompt.mjs";
import { SystemPrompt as SystemPromptforCreateTests,UserPrompt as UserPromptforCreateTests, AssistantPrompt} from "../openaiApi/CreateTests_prompt.mjs";
import { SystemPrompt as SystemPromptforteachAI,UserPrompt as UserPromptforteachAI} from "../openaiApi/teachAI_prompt.mjs";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

let tips ="";
let Quiz ="";

app.post("/setting", async (request, response) => {
  try {
    const message = await AIresponse(SystemPromptforteachAI,UserPromptforteachAI(request.body.criteria1,request.body.criteria2,request.body.criteria3,request.body.detail1,request.body.detail2,request.body.detail3),"",0.7)
    // TODO: 余裕あればバックグラウンドで回す
    tips = message
    console.log(`messageは ${message}`)
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
})

app.post("/send-email", async (request, response) => {
  try {
    const email = request.body.email;
    const message = await AIresponse(SystemPromptforanalysis,UserPromptforanalysis(email),tips,0)
    Quiz = await AIresponse(SystemPromptforCreateTests,UserPromptforCreateTests,AssistantPrompt(email,message),0.9)
    response.json({ message: message });
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
});

export const Problem = Quiz;//これをつなげる
app.listen(3000);
