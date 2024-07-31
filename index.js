document.addEventListener("DOMContentLoaded", function () {
  const buttonCloseModal = document.querySelector(".btn-secondary");
  buttonCloseModal.addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal-open");
  });

  const buttonToggleTitle = document.querySelector(".btn-warning");
  buttonToggleTitle.addEventListener("click", function () {
    const title = document.querySelector(".block_type_title");
    title.classList.toggle("block_type_none");
  });

  const buttonToggleMidleBlock = document.querySelector(".btn-success");
  buttonToggleMidleBlock.addEventListener("click", function () {
    const middleBlock = document.querySelector(".block__dotted");
    middleBlock.classList.toggle("block_type_toggle");
  });
});
