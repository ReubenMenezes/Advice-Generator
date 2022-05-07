async function a() {
  const quoteEl = document.querySelector(".quote");
  const advice = await fetch("https://api.adviceslip.com/advice");
  const adviceData = await advice.json();
  console.log(adviceData.slip.advice);
  console.log(adviceData.slip);
  quoteEl.innerText = adviceData.slip.advice;
}

document.getElementById("new-quote").addEventListener("click", a);
setTimeout(_=> console.log("Now"),2000)
