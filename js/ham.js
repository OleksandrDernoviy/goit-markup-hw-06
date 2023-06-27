(() => {
  const refs = {
    openHamBtn: document.querySelector("[data-ham-open]"),
    closeHamBtn: document.querySelector("[data-ham-close]"),
    ham: document.querySelector("[data-ham]"),
  };

  refs.openHamBtn.addEventListener("click", toggleHam);
  refs.closeHamBtn.addEventListener("click", toggleHam);

  function toggleHam() {
    refs.ham.classList.toggle("is-hidden");
  }
})();