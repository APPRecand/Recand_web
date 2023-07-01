const showPass = () => {
  const eyeBtn = document.querySelector('.lnr-eye');
  const inputPass = document.querySelector('#floatingInputPassword');

  if (window.innerWidth <= 768) {
    eyeBtn.addEventListener('click', () => {
      if (inputPass.type === 'password') {
        inputPass.type = 'text';
      } else {
        inputPass.type = 'password';
      }
    });
  } else {
    eyeBtn.addEventListener('mousedown', () => {
      inputPass.type = 'text';
    });

    eyeBtn.addEventListener('mouseup', () => {
      inputPass.type = 'password';
    });

    eyeBtn.addEventListener('mousemove', () => {
      inputPass.type = 'password';
    });
  }
};

const inputEmailIsValid = () => {
  const inputEmail = document.querySelector('#floatingInputEmail');
  const labelEmail = document.querySelector('.label-email');
  if (inputEmail.value == '') {
    inputEmail.classList.add('is-invalid');
    labelEmail.textContent = 'Insira um email válido.';
    labelEmail.classList.add('invalid-feedback');
  }
};

const inputPassIsValid = () => {
  const inputPass = document.querySelector('#floatingInputPassword');
  const elementInput = document.querySelector('.input-pass');
  const eye = document.querySelector('.lnr-eye');
  const labelPass = document.querySelector('.label-pass');
  if (inputPass.value == '') {
    inputPass.classList.add('is-invalid');
    elementInput.removeChild(eye);
    labelPass.textContent = 'Insira uma senha válida.';
    labelPass.classList.add('invalid-feedback');
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

window.onload = () => {
  showPass();
  submitBtn();
};
