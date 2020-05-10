const myIcon = "images/takuto-meshi.png";
const yourIcon = "images/yuta.jpg";

function myMessage(text) {
  return `<div class="my-message">
    <div class="message-text">${text}</div>
    <img src="${myIcon}" class="message-icon">
  </div>`
}

function yourMessage(text) {
  return `<div class="message">
    <img src="${yourIcon}" class="message-icon">
    <div class="message-text">${text}</div>
  </div>`
}

function yourImage(src) {
  return `<div class="message">
    <img src="${yourIcon}" class="message-icon">
    <div class="message-text">
      <img class="message-image" src="${src}">
    </div>
  </div>`
}

function myImage(src) {
  return `<div class="my-message">
    <div class="message-text">
      <img class="message-image" src="${src}">
    </div>
    <img src="${myIcon}" class="message-icon">
  </div>`
}
function title(text) {
  return `<div class="center">
    <p class="title">
      ${text}
    </p>
  </div>`
}

function chat(messages) {
  return messages.reduce(function(a, b) {
    if (b.type === "m") {
      return a + myMessage(b.text);
    } else if (b.type === "y") {
      return a + yourMessage(b.text);
    } else if (b.type === "t") {
      return a + title(b.text);
    } else if (b.type === "i") {
      return a + myImage(b.text);
    } else if (b.type === "j") {
      return a + yourImage(b.text);
    }
  }, "")
}

function csvToChat(csv) {
  return csv.split("\n").map(function(msg) {
    if (msg === "") {
      return null;
    }
    return {
      type: msg[0],
      text: msg.slice(1)
    }
  }).filter(function(msg) {
    return msg !== null;
  })
}

function getChatTexts() {
  const fs = require("fs")
  return new Promise(function(resolve, reject) {
    resolve(fs.readFileSync("chat.csv", "utf-8"))
  })
}

getChatTexts().then(function(text) {
  const html = chat(csvToChat(text))
  let proc = require("child_process").spawn("pbcopy")
  proc.stdin.write(html)
  proc.stdin.end()
})
