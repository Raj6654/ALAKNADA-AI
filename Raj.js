const chatBox = document.getElementById("chat-box");
const input = document.getElementById("userInput");

function addMessage(text, who){
  let div = document.createElement("div");
  div.className = "msg " + who;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage(){
  let text = input.value.trim();
  if(!text) return;

  addMessage(text,"user");
  input.value = "";

  // Temporary AI reply (working)
  addMessage("Thinking...", "bot");

  setTimeout(()=>{
    document.querySelectorAll(".bot").slice(-1)[0].innerText = 
      "This is ALAKNADA AI. Soon it will become Real AI like ChatGPT 🔥";
  },1000);
}