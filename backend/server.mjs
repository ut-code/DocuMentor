import express from "express";
import { callOpenaiApi } from "../openaiApi/callOpenaiApi.mjs";
import { analyze } from "../openaiApi/analysis/main.mjs";
import { CreateTests } from "../openaiApi/CreateTests/main.mjs";
import { teachAI } from "../openaiApi/teachAI/main.mjs";
import { SystemPrompt as SystemPromptforanalysis,UserPrompt as UserPromptforanalysis} from "../openaiApi/analysis/prompt.mjs";
import { SystemPrompt as SystemPromptforCreateTests,UserPrompt as UserPromptforCreateTests, AssistantPrompt} from "../openaiApi/CreateTests/prompt.mjs";
import { SystemPrompt as SystemPromptforteachAI,UserPrompt as UserPromptforteachAI} from "../openaiApi/teachAI/prompt.mjs";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/setting", async (request, response) => {
  try {
    // TODO: 文面作る処理。
    const message = await teachAI(SystemPromptforteachAI,UserPromptforteachAI(request.body.criteria1,request.body.criteria2,request.body.criteria3,request.body.detail1,request.body.detail2,request.body.detail3)) // TODO:この結果をどっかに保存
    response.json({ message: message }); //いらん
    // TODO: 余裕あればバックグラウンドで回す
    console.log(`messageは ${message}`)
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
})

app.post("/send-email", async (request, response) => {
  try {
    const email = request.body.email;
    const message = await analyze(SystemPromptforanalysis,UserPromptforanalysis(email))
    response.json({ message: message });
  } catch (error) {
    response.json({ message: `エラーが発生しました。${error.message}` });
  }
});

app.listen(3000);
