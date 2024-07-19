document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".btn-secondary")
    .addEventListener("click", function () {
      document.querySelector(".modal").classList.remove("modal-open");
    });

  document.querySelector(".btn-warning").addEventListener("click", function () {
    const title = document.querySelector(".title");

    if (title.classList.contains("title_none")) {
      title.classList.remove("title_none");
    } else {
      title.classList.add("title_none");
    }
  });
  document.querySelector(".btn-success").addEventListener("click", function () {
    const middleBlock = document.querySelector(".border-dotted");

    if (middleBlock.classList.contains("middle_first")) {
      middleBlock.classList.remove("middle_first");
    } else {
      middleBlock.classList.add("middle_first");
    }
  });
});
