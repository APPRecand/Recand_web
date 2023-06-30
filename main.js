const showPass = () => {
  const eyeBtn = document.querySelector('.lnr-eye');
  const inputPass = document.querySelector('#floatingInputPassword');
  eyeBtn.addEventListener('mousedown', () => {
    inputPass.type = 'text';
  });

  eyeBtn.addEventListener('mouseup', () => {
    inputPass.type = 'password';
  });

  eyeBtn.addEventListener('mousemove', () => {
    inputPass.type = 'password';
  });
};

showPass();

const inputEmailIsValid = () => {
  const inputEmail = document.querySelector('#floatingInputEmail');
  if (inputEmail.value == '') {
    inputEmail.classList.add('is-invalid');
  }
};

const inputPassIsValid = () => {
  const inputPass = document.querySelector('#floatingInputPassword');
  const elementInput = document.querySelector('.input-pass');
  const eye = document.querySelector('.lnr-eye');
  if (inputPass.value == '') {
    inputPass.classList.add('is-invalid');
    elementInput.removeChild(eye);
  }
};

const submitBtn = () => {
  const sendBtn = document.querySelector('.submitBtn');
  sendBtn.addEventListener('click', (element) => {
    element.preventDefault();
    inputEmailIsValid();
    inputPassIsValid();
  });
};

submitBtn();
