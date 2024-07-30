document.addEventListener("DOMContentLoaded", function () {
  const buttonCloseModal = document.querySelector(".btn-secondary");
  buttonCloseModal.addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal-open");
  });

  const buttonToggleTitle = document.querySelector(".btn-warning");
  buttonToggleTitle.addEventListener("click", function () {
    const title = document.querySelector(".block__title");
    title.classList.toggle("block__title_none");
  });

  const buttonToggleMidleBlock = document.querySelector(".btn-success");
  buttonToggleMidleBlock.addEventListener("click", function () {
    const middleBlock = document.querySelector(".border-dotted");
    middleBlock.classList.toggle("block__middle_first");
  });
});
