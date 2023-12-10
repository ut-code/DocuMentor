document.getElementById("setting-button").onclick = async () => {
  await fetch("/setting", {
    method: "POST",
    body: new URLSearchParams({
      criteria1: document.getElementById("criterion1").value,
      detail1: document.getElementById("description1").value,
      allocation1: document.getElementById("allocation1").value,
      criteria2: document.getElementById("criterion2").value,
      detail2: document.getElementById("description2").value,
      allocation2: document.getElementById("allocation2").value,
      criteria3: document.getElementById("criterion3").value,
      detail3: document.getElementById("description3").value,
      allocation3: document.getElementById("allocation3").value,
    }),
  });
};

//   $('button').click(function() {
//     var criterion1Input = document.getElementById("criterion1");
//   // criterion1Inputのvalueプロパティを使用して値を取得
//     var criterion1Value = criterion1Input.value;

//     var criterion2Input = document.getElementById("criterion2");
//   // criterion2Inputのvalueプロパティを使用して値を取得
//     var criterion2Value = criterion2Input.value;

//     var criterion3Input = document.getElementById("criterion3");
//   // criterion3Inputのvalueプロパティを使用して値を取得
//     var criterion3Value = criterion3Input.value;

//     var newValue = criterion1Value + criterion2Input + criterion3Value;

// // idが "score-value" の要素にアクセスし、textContentを更新
//     document.getElementById("score-value").textContent = newValue;  
// })

// // ページが読み込まれたときに実行される初期化関数
// document.addEventListener("DOMContentLoaded", function () {
//     // idが "setting-button" のボタン要素を取得
//     var settingButton = document.getElementById("setting-button");

//     // ボタンがクリックされたときに実行される関数
//     function handleButtonClick() {
//       // ここにボタンがクリックされたときの処理を追加

//       var criterion1Input = document.getElementById("criterion1");
//       // criterion1Inputのvalueプロパティを使用して値を取得
//         var criterion1Value = criterion1Input.value;
  
//         var criterion2Input = document.getElementById("criterion2");
//       // criterion2Inputのvalueプロパティを使用して値を取得
//         var criterion2Value = criterion2Input.value;
  
//         var criterion3Input = document.getElementById("criterion3");
//       // criterion3Inputのvalueプロパティを使用して値を取得
//         var criterion3Value = criterion3Input.value;
  
//         var newValue = criterion1Value + criterion2Input + criterion3Value;
  
//     // idが "score-value" の要素にアクセスし、textContentを更新
//         document.getElementById("score-value").textContent = newValue;  
//     }
//     // ボタンにクリックイベントを追加
//     settingButton.addEventListener("click", handleButtonClick);
//   });