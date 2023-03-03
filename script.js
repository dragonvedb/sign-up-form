const form = document.getElementById("sign-up");
const password_input = document.getElementById("password");
const password_confirm_input = document.getElementById("repeat-password");
const submit = document.getElementById("submit");

password_input.addEventListener('input', e => {
  password_confirm_input.setAttribute('pattern', `${e.target.value}`)
});

submit.addEventListener('click',()=>{
  if (password_confirm_input.validity.patternMismatch) {
    password_confirm_input.setCustomValidity('Please make sure your passwords match');
  } else { 
    password_confirm_input.setCustomValidity('');
  }
})