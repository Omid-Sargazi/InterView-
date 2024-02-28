const button = document.querySelector("button");
button.addEventListener("click", handler);

function handler() {
  const marriageInp = document.querySelectorAll('input[name="marriage"]');
  const educationInp = document.querySelectorAll("input[name='edu']");
  console.log("object");
  console.log("object");
  let marriage, education;
  for (let input of marriageInp) {
    if (input.checked) {
      marriage = input.value;
      break;
    }
  }
  for (let input of educationInp) {
    if (input.checked) {
      education = input.value;
      break;
    }
  }
  console.log(marriage, education);
}
