const FirstEvaluationCriteria = "適切な敬語の使用"
const FirstEvaluationDetail = "尊敬語と謙譲語の使い分けや2重敬語を使っていないかなどに気をつける"
const SecondEvaluationCriteria ="メール形式が正しいか"
const SecondEvaluationDetail = "必ず箇条書きで要点を述べるようにする。送り手の名前を必ず記載する。"
const ThirdEvaluationCriteria = "内容の簡潔性、明瞭性"
const ThirdEvaluationDetail = "必要な情報が簡潔に述べられているか。必要ない情報が含まれていないか"
const firstEvaluationPoint = 30;
const SecondEvaluationPoint = 30;
const ThirdEvaluationPoint = 20;

export function UserPrompt(UserInput){
    return `
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
`+ UserInput +`

`}
export const SystemPrompt = "jsonの形式でのみで返答して"   //考える必要あり