const form = document.getElementById("sign-up");
const password_input = document.getElementById("password");
const password_confirm_input = document.getElementById("repeat-password");

password_input.addEventListener('input', updateConfirmation);

function updateConfirmation(e) {
  password_confirm_input.setAttribute('pattern', `${e.target.value}`)
}


/*form.addEventListener('submit', validateForm);

function validateForm(e) {

    const form = e.target;
  
    if (form.checkValidity()) {
        if (password_confirm_input.value !== password_input.value) {
            password_confirm_input.classList.add('invalid');
        }
    }
    else {
        e.preventDefault();
        Array.from(form.elements).forEach(i => {
        if (i.checkValidity()) {
          // field is valid - remove class
            i.parentElement.classList.remove('invalid');
        }
        else {
          // field is invalid - add class
            i.parentElement.classList.add('invalid');
        }
    });
  };*/