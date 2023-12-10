const sendButton = document.getElementById("send-button");
const emailTarea = document.getElementById("email-tarea");
const result = document.getElementById("result");

sendButton.onclick = async () => {
  const email = emailTarea.value;
  const response = await fetch("/send-email", {
    method: "POST",
    body: new URLSearchParams({ email: email }),
  });
  const data = await response.json();
  result.textContent = data.message;
};
