let response = "";

window.onload = async () => {
  const res = await fetch("/get-quiz-info");
  const resjson = await res.json();
  console.log(`resjson: ${resjson}`);
  response = JSON.parse(resjson.message);
  console.log(`response.message: ${resjson.message}`);

  let i = 0;
  for (const res of response) {
    const question = document.createElement("h2");
    const inputContainer = document.createElement("div");

    question.textContent = res["question"];

    document.getElementById("Qs").appendChild(question);

    let j = 0;
    for (const option of res["choice"]) {
      //const inputLabelPair = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");

      input.id = j;
      input.value = j;
      input.type = "radio";
      input.name = i;

      label.innerHTML = option;
      label.for = j;

      //inputLabelPair.appendChild(input);
      //inputLabelPair.appendChild(label);

      //inputContainer.appendChild(inputLabelPair)

      inputContainer.appendChild(input);
      inputContainer.appendChild(label);
      //

      j++;
      inputContainer.setAttribute("class", "smallquiz");
      document.getElementById("Qs").appendChild(inputContainer);
    }

    i++;
  }

  // 採点を行う
  document.getElementById("answer-button").onclick = () => {
    let sum = 0;
    for (let i = 0; i < response.length; i++) {
      const selectedValue =
        response[i].choice[document.querySelector(`input[name="${i}"]:checked`).value];
      console.log(selectedValue, response[i]["answer"]);
      if (selectedValue === response[i]["answer"]) {
        sum += 1;
      }
    }
    document.getElementById(
      "result"
    ).innerHTML = `<p>あなたの点数は ${sum} / ${response.length} 点です。</p>
   <a href="/analysis">再度分析を行う</a>
  `;
  };
};
