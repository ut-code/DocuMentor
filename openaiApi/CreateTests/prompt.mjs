// import {UserInput as UserInput} from './' //入力情報を取り入れる
import { EVALUATION } from "../analysis/main.mjs"
import {text} from "../teachAI/main.mjs"

const evluation = toString(EVALUATION);

export const UserPrompt = `
メール文に下った評価について、改善する必要があることにたいし小テストを作って。

#小テストの概要
    ･この小テストはメール文を書いた人が受ける
    ･メールの文を書いた人がこの小テストをうけることでより良いメール文を書けるようになることが目的
    ･点数に応じて1問~10問の間で必要な数を決め、その分の問題を全部作る
    ･各問題のテーマについてはメール文に付随する要素をテーマとし、直接メール文を用いることはしない。以下は例だがこれを参考にしすぎず評価を参考にして適切な問題を設定して。
        #例 
        問題:以下の選択肢の中から、敬語が正しく使われているものを選んでください。正解は一つだけです。
        A. お客様、おられますか？
        B. お客様、いらっしゃいますか？
        C. お客様、おいでになりますか？
        D. お客様、お見えになりますか？
    ･問題文については、それだけを読んで答えられるようにする
    ･各問題について答えが一意の定まるようにする
    ･4択形式で選択肢を作る
    ･正答を与える
    ･それぞれの選択肢を選んだ場合について、解説を作る

#outputの形式
[
    {
      "question": "",
      "choice": {
        "choice1":"",
        "choice2":"",
        "choice3":"",
        "choice4":"",
      },
      "answer": "",
      "explanation": {
        "choice1":"",
        "choice2":"",
        "choice3":"",
        "choice4":"",
      },
    },
    {
        "question": "",
        "choice": {
          "choice1":"",
          "choice2":"",
          "choice3":"",
          "choice4":"",
        },
        "answer": "",
        "explanation": {
          "choice1":"",
          "choice2":"",
          "choice3":"",
          "choice4":"",
        },
      },

      //続く
]
`




export const SystemPrompt = "小テストについて #outputの形式 で示されたjsonの形式で返答し、それ以外には何も書かないで"   //考える必要あり
export const AssistantPrompt = "#メール文\n" + UserInput + "\n\n\nに対して\n#評価" + evluation + "\n\nという評価がなされた。" + text
