// import {} from  './'

const FirstEvaluationCriteria = "適切な敬語の使用"
const FirstEvaluationDetail = "尊敬語と謙譲語の使い分けや2重敬語を使っていないかなどに気をつける"
const SecondEvaluationCriteria =""
const SecondEvaluationDetail = ""
const ThirdEvaluationCriteria = ""
const ThirdEvaluationDetail = ""

export function UserPrompt(Criteria1,Criteria2,Criteria3,Detail1,Detail2,Detail3) {return `
#以下で示される評価基準に対して、評価する際にどの点に気をつけるべきかを詳しく提示して。

#評価基準
･`+ Criteria1+`
    `+ Detail1+ `
･`+ Criteria2+`
    `+ Detail2+ `
･`+ Criteria3+`
    `+ Detail3+ `

#
`//書きかけ
}



export const SystemPrompt = "あなたはChatGPTの先生です。ChatGPTが理解しやすいよいに返答してください。"   