import express from "express";
import { AIresponse } from "../openaiApi/main.mjs";
import { SystemPrompt as SystemPromptforanalysis,UserPrompt as UserPromptforanalysis} from "../openaiApi/analysis/prompt.mjs";
import { SystemPrompt as SystemPromptforCreateTests,UserPrompt as UserPromptforCreateTests, AssistantPrompt} from "../openaiApi/CreateTests/prompt.mjs";
import { SystemPrompt as SystemPromptforteachAI,UserPrompt as UserPromptforteachAI} from "../openaiApi/teachAI/prompt.mjs";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

let tips =""

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
    response.json({ message: message });
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
});

app.listen(3000);


//createtestのtemperatureは0．9
