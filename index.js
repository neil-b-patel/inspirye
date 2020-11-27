window.addEventListener("DOMContentLoaded", (e) => {
  getQuote();
});

const url = "https://api.kanye.rest";
let quote = "";

function getQuote() {
  let xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.send();

  xhr.onload = function () {
    quote = JSON.parse(xhr.responseText).quote;
    document.getElementById("quote").innerHTML = quote;
  };
}