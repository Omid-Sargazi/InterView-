console.log("object");
const btn1 = document.querySelector("#form1 button");
btn1.addEventListener("click", () => {
  const input = document.querySelector("#form1 input");
  input.value += input.value;
});

const button2 = document.querySelector("#form2 button");
button2.addEventListener("click", handler);

function handler() {
  const inputs = document.querySelectorAll("#form2 input");
  console.log(inputs);
  for (let input of inputs) {
    if (input.checked) {
      console.log(input.value);
    }
  }
}
