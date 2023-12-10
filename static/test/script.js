const response = [
  {
    question: "あ？",
    choice: ["あ", "い", "う", "え"],
    answer: "あ",
    explanation: ["あ", "い", "う", "え"],
  },
  {
    question: "いい？",
    choice: ["いあ", "いい", "いう", "いえ"],
    answer: "いい",
    explanation: ["いあ", "いい", "いう", "いえ"],
  },
];

let i = 0;
for (const res of response) {
  const question = document.createElement("h2");
  const inputContainer = document.createElement("div");

  question.textContent = res["question"];

  document.getElementById("Qs").appendChild(question);

  let j = 0;
  for (const option of res["choice"]) {
    const inputLabelPair = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.id = j;
    input.value = j;
    input.type = "radio";
    input.name = i;

    label.innerHTML = option;
    label.for = j;

    inputLabelPair.appendChild(input);
    inputLabelPair.appendChild(label);

    inputContainer.appendChild(inputLabelPair);

    j++;

    document.getElementById("Qs").appendChild(inputContainer);
  }

  i++;
}

document.getElementById("answer-button").onclick = () => {
  const selectedValue = document.querySelector('input[name="0"]:checked').value;
  document.getElementById("sample-p").textContent = `${selectedValue}が選択されているます！`;
};
