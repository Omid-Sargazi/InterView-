const container = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];
let careerIndex = 0;
let charIndex = 0;

updateText();

function updateText() {
  container.innerHTML = `
    <h1>I am a ${careers[careerIndex].slice(0, charIndex)}</h1>
    `;
  charIndex++;
  if (charIndex === careers[careerIndex].length) {
    careerIndex++;
    charIndex = 0;
  }
  setTimeout(() => {
    updateText();
  }, 400);
}
