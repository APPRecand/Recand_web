const showPass = () => {
  const eyeBtn = document.querySelector('.bi');
  const inputPass = document.querySelector('#floatingInputPassword');

  eyeBtn.addEventListener('click', (element) => {
    element.preventDefault();
    if (inputPass.type === 'password') {
      eyeBtn.classList.remove('bi-eye');
      eyeBtn.classList.add('bi-eye-slash');
      inputPass.type = 'text';
    } else {
      eyeBtn.classList.remove('bi-eye-slash');
      eyeBtn.classList.add('bi-eye');
      inputPass.type = 'password';
    }
  });
};

const inputEmailIsValid = () => {
  const inputEmail = document.querySelector('#floatingInputEmail');
  const labelEmail = document.querySelector('.label-email');
  if (inputEmail.value == '') {
    inputEmail.classList.add('is-invalid');
    labelEmail.textContent = 'Insira um email válido.';
    labelEmail.classList.add('invalid-feedback');
  }

  inputEmail.addEventListener('keypress', () => {
    inputEmail.classList.remove('is-invalid');
    labelEmail.textContent = 'Email';
    labelEmail.classList.remove('invalid-feedback');
  });
};

const inputPassIsValid = () => {
  const inputPass = document.querySelector('#floatingInputPassword');
  const elementInput = document.querySelector('.input-pass');
  const eye = document.querySelector('.bi');
  const labelPass = document.querySelector('.label-pass');
  if (inputPass.value == '') {
    inputPass.classList.add('is-invalid');
    elementInput.removeChild(eye);
    labelPass.textContent = 'Insira uma senha válida.';
    labelPass.classList.add('invalid-feedback');
  }

  inputPass.addEventListener('keypress', () => {
    inputPass.classList.remove('is-invalid');
    labelPass.textContent = 'Senha';
    labelPass.classList.remove('invalid-feedback');
  });
};

const submitBtn = () => {
  const sendBtn = document.querySelector('.submitBtn');
  sendBtn.addEventListener('click', (element) => {
    element.preventDefault();
    inputEmailIsValid();
    inputPassIsValid();
  });
};

window.onload = () => {
  showPass();
  submitBtn();
};
