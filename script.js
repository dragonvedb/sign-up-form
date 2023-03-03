const form = document.getElementById("sign-up");

form.addEventListener('submit', validateForm);

function validateForm(e) {

    const form = e.target;
  
    if (form.checkValidity()) {
      console.log("OK!")
    }
    else {
      e.preventDefault();
      console.log("NOT OK!")
    }
  };