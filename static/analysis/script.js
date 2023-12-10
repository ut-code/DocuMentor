const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");

const botMessageDiv = document.createElement("div");
botMessageDiv.className = "message bot-message";

sendButton.onclick = async () => {
  const messageContent = messageInput.value;
  if (messageContent) {
    const messages = document.getElementById("messages");
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "message user-message";
    userMessageDiv.textContent = messageContent;
    messages.appendChild(userMessageDiv);

    // bot response (loading)
    botMessageDiv.textContent = "Loading...";
    messages.appendChild(botMessageDiv);

    // // Scroll to the bottom to show the latest messages
    // messages.scrollTop = messages.scrollHeight;
  }
  const message = messageInput.value;
  messageInput.value = "";
  console.log(`messageは ${message}`);
  const response = await fetch("/send-email", {
    method: "POST",
    body: new URLSearchParams({ email: message }),
  });
  const data = await response.json();
  const parsed = JSON.parse(data.message.replace(/\s+/g, ''));
  console.log(`${parsed}<-parsed`)
  botMessageDiv.textContent = parsed.document;
};
