// import {} from  './'

const FirstEvaluationCriteria = "適切な敬語の使用"
const FirstEvaluationDetail = "尊敬語と謙譲語の使い分けや2重敬語を使っていないかなどに気をつける"
const SecondEvaluationCriteria =""
const SecondEvaluationDetail = ""
const ThirdEvaluationCriteria = ""
const ThirdEvaluationDetail = ""

export const UserPrompt = `
#以下で示される評価基準に対して、評価する際にどの点に気をつけるべきかを詳しく提示して。

#評価基準
･`+ FirstEvaluationCriteria+`
    `+ FirstEvaluationDetail+ `
･`+ SecondEvaluationCriteria+`
    `+ SecondEvaluationDetail+ `
･`+ ThirdEvaluationCriteria+`
    `+ ThirdEvaluationDetail+ `

#
`




export const SystemPrompt = "あなたはChatGPTの先生です。ChatGPTが理解しやすいよいに返答してください。"   //考える必要あり
export const AssistantPrompt = "" //なし