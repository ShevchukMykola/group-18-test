(() => {
  const refs = {
    openSignInBtn: document.querySelector('[data-sign-in-open]'),
    closeSignInBtn: document.querySelector('[data-sign-in-close]'),
    signin: document.querySelector('[data-sign-in-modal]'),
    goToSignUp: document.querySelector('[data-go-to-sign-up]'),

    openSignUpBtn: document.querySelector('[data-sign-up-open]'),
    closeSignUpBtn: document.querySelector('[data-sign-up-close]'),
    signup: document.querySelector('[data-sign-up-modal]'),
    goToSignIn: document.querySelector('[data-go-to-sign-in]'),
  };

  refs.openSignInBtn.addEventListener('click', toggleSignIn);
  refs.closeSignInBtn.addEventListener('click', toggleSignIn);

  function toggleSignIn() {
    document.body.classList.toggle("modal-open")
    refs.signin.classList.toggle('is-hidden');
   
  }

  refs.openSignUpBtn.addEventListener('click', toggleSignUp);
  refs.closeSignUpBtn.addEventListener('click', toggleSignUp);

  function toggleSignUp() {
    document.body.classList.toggle("modal-open")
    refs.signup.classList.toggle('is-hidden');
  }

  refs.goToSignUp.addEventListener('click', changeModal);
  refs.goToSignIn.addEventListener('click', changeModal);
  
  function changeModal() {
    refs.closeSignInBtn.click()
    refs.openSignUpBtn.click();
  }
})();
