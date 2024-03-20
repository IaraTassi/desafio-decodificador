const messageEncrypt = document.querySelector("#message-encrypt");
const messageDescrypt = document.querySelector("#message-descrypt");
const arrayEncrypt = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncrypt() {
  const resultEncrypt = encrypt(messageEncrypt.value.toLowerCase());
  messageDescrypt.value = resultEncrypt;
}

function btnDescrypt() {
  const resultDescrypt = descrypt(messageEncrypt.value.toLowerCase());
  messageDescrypt.value = resultDescrypt;
}

function encrypt(messageEncrypt) {
  for (let i = 0; i < arrayEncrypt.length; i++) {
    if (messageEncrypt.includes(arrayEncrypt[i][0])) {
      messageEncrypt = messageEncrypt.replaceAll(
        arrayEncrypt[i][0],
        arrayEncrypt[i][1]
      );
    }
  }
  if (messageEncrypt !== "") {
    document.querySelector(".message-img").style.display = "none";
    document.querySelector("#message-descrypt").style.display = "flex";
    document.querySelector("#btn-copy").style.display = "block";
  }
  return messageEncrypt;
}

function descrypt(messageDescrypt) {
  for (let i = 0; i < arrayEncrypt.length; i++) {
    if (messageDescrypt.includes(arrayEncrypt[i][1])) {
      messageDescrypt = messageDescrypt.replaceAll(
        arrayEncrypt[i][1],
        arrayEncrypt[i][0]
      );
    }
  }
  if (messageDescrypt !== "") {
    document.querySelector(".message-img").style.display = "none";
    document.querySelector("#message-descrypt").style.display = "flex";
    document.querySelector("#btn-copy").style.display = "none";
  }
  return messageDescrypt;
}

function copy() {
  let textCopy = document.querySelector("#message-descrypt");
  textCopy.select();
  textCopy.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textCopy.value);
}
