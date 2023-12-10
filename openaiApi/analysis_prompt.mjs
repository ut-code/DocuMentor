const FirstEvaluationCriteria = "適切な敬語の使用"
const FirstEvaluationDetail = "尊敬語と謙譲語の使い分けや2重敬語を使っていないかなどに気をつける"
const SecondEvaluationCriteria ="メール形式が正しいか"
const SecondEvaluationDetail = "必ず箇条書きで要点を述べるようにする。送り手の名前を必ず記載する。"
const ThirdEvaluationCriteria = "内容の簡潔性、明瞭性"
const ThirdEvaluationDetail = "必要な情報が簡潔に述べられているか。必要ない情報が含まれていないか"
const firstEvaluationPoint = 30;
const SecondEvaluationPoint = 30;
const ThirdEvaluationPoint = 20;

export function UserPrompt(UserInput,criteria1,criteria2,criteria3,Point1,Point2,Point3,detail1,detail2,detail3){
    return `
以下に送るメールサンプルについてその評価をして

#評価基準
･`+ criteria1+`(`+Point1+`点満点)
    `+ detail1+ `
･`+ criteria2+`(`+Point2+`点満点)
    `+ detail2+ `
･`+ criteria3+`(`+Point3+`点満点)
    `+detail3+ `

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
export const SystemPrompt = "javascriptの連想配列の形式でのみで返答して"   //考える必要あり