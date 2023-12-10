export const SystemPrompt = "";

export const UserPrompt = `
これから私の書いたメール文を評価してもらいます。その前にメール文の状況設定を考えてください。以下詳細です。

#評価基準
･`+ Criteria1+`
    `+ Detail1+ `
･`+ Criteria2+`
    `+ Detail2+ `
･`+ Criteria3+`
    `+ Detail3+ `

この評価基準について、その達成度をよく確認できるようなメール文の状況設定が必要です。
    
`;