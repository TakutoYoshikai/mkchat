#!/usr/bin/env node
const template = require("template-string");
const fs = require("fs");

const myIcon = "images/takuto-meshi.png";
const yourIcon = "images/yuta.jpg";
const mkdirp = require("mkdirp");

function myMessage(text) {
  return `  <div class="my-message">
    <div class="message-text">${text}</div>
    <img src="${myIcon}" class="message-icon">
  </div>
`
}

function yourMessage(text) {
  return `  <div class="message">
    <img src="${yourIcon}" class="message-icon">
    <div class="message-text">${text}</div>
  </div>
`
}

function yourImage(src) {
  return `  <div class="message">
    <img src="${yourIcon}" class="message-icon">
    <div class="message-text">
      <img class="message-image" src="${src}">
    </div>
  </div>
`
}

function myImage(src) {
  return `  <div class="my-message">
    <div class="message-text">
      <img class="message-image" src="${src}">
    </div>
    <img src="${myIcon}" class="message-icon">
  </div>
`
}
function title(text) {
  return `  <div class="center">
    <p class="title">
      ${text}
    </p>
  </div>
`
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

function chatToHtml(csv) {
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

function getChatTexts(chatTxt) {
  const fs = require("fs")
  return fs.readFileSync(chatTxt, "utf-8");
}

const text = getChatTexts(process.argv[2]);
const chatDiv = chat(chatToHtml(text));
let html = fs.readFileSync(__dirname + "/index.html", "utf8");
html = template(html, {
  chat: chatDiv,
});

const outputDir = "./chat";
const imageDir = outputDir + "/images";
mkdirp.sync(outputDir);
mkdirp.sync(imageDir);
fs.copyFileSync(__dirname + "/index.css", outputDir + "/index.css");
fs.writeFileSync(outputDir + "/index.html", html);
