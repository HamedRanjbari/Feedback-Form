const $ = document;
const messageText = $.querySelector(".message-text");
const Texts = $.querySelectorAll(".text");
const btn = $.querySelector(".btn");
const message = $.querySelector(".message");
const emojis = $.querySelectorAll(".emoji");
const emoColor = ["#960037", "#004471", "#008935"];

emojis.forEach((emoji, idx) => {
  emoji.addEventListener("click", () => {
    emojis.forEach((emo) => {
      emo.classList.remove("active");
      emo.style.color = "black";
      emo.firstElementChild.style.color = "rgb(154, 154, 154)";
    });
    emoji.classList.add("active");
    emoji.style.color = emoColor[idx];
    emoji.firstElementChild.style.color = emoColor[idx];
    btn.addEventListener("click", () => {
      messageText.innerHTML = `We realized that you are ${emojis[idx].lastElementChild.innerHTML}`;
      message.style.transform = "translateY(0)";
    });
  });
});