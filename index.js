//закрытие модального
$(document).ready(function () {
  $(".btn-secondary").click(function () {
    $(".modal").removeClass("modal-open");
  });
});

//кнопка 1
$(document).ready(function () {
  $(".btn-warning").click(function () {
    $(".section-title").toggleClass("section-title_none");
  });
});

//кнопка 2
$(document).ready(function () {
  $(".btn-success").click(function () {
    $(".border-dotted").toggleClass("section-middle_first");
  });
});
