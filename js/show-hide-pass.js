(() => {
  const refs = {
    showPassBtn: document.querySelector('[data-show-pass]'),
    hidePassBtn: document.querySelector('[data-hide-pass]'),
    pass: document.querySelector('[data-password]'),
  };

  refs.showPassBtn.addEventListener('click', ShowPass);
  refs.hidePassBtn.addEventListener('click', HidePass);

  function ShowPass() {
      refs.pass.setAttribute('type', 'text')
      refs.showPassBtn.classList.toggle('is-hidden')
      refs.hidePassBtn.classList.toggle('is-hidden');
  }
  function HidePass() {
      refs.pass.setAttribute('type', 'password')
      refs.hidePassBtn.classList.toggle('is-hidden')
      refs.showPassBtn.classList.toggle('is-hidden');
  }
})();