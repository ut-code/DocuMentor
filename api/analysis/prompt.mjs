// import {UserInput as UserInput} from './' //入力情報を取り入れる
// import {}


export const UserPrompt = `
以下に送るメールサンプルについてその評価をして

#評価基準
･`+ FirstEvaluationCriteria+`(`+firstEvaluationPoint+`点満点)
    `+ FirstEvaluationDetail+ `
･`+ SecondEvaluationCriteria+`(`+SecondEvaluationPoint+`点満点)
    `+ SecondEvaluationDetail+ `
･`+ ThirdEvaluationCriteria+`(`+ThirdEvaluationPoint+`点満点)
    `+ ThirdEvaluationDetail+ `

以上の３点において、合計１００点満点で評価して。(もし各項目の点数の合計が100点になっていなければ、適切に各項目の配点を変えて)
その際、それぞれの項目がその点数になった理由と満点でなかった場合は改善点を文章で具体的にわかりやすく書いて。

#outputの形式
[
    points:{FirstScore:"", SecondScore:"", ThirdScore:""}
    document:""
]

返答は以上のようなjsonの形式で答えて




#メールサンプル

`+ UserInput +``


export const SystemPrompt = "jsonの形式でのみで返答して"   //考える必要あり
export const AssistantPrompt = "" //なし