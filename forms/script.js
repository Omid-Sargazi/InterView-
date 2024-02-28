let myForm = document.forms[0];
console.log(myForm);

myForm = document.getElementsByTagName("form")[0];
console.log(myForm);

myForm = document.forms.myForm;
console.log(myForm, "myFrom");

const text = myForm.mytext;
console.log(text);

const button = myForm.mybutton;
console.log(button);

console.log("action", myForm.action);
console.log("method", myForm.method);
console.log("length", myForm.length);

text.required = true;
text.readOnly = true;
text.disabled = true;
