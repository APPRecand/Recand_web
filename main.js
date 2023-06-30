const eyeBtn = document.querySelector('.lnr-eye');

const showPass = () => {
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
