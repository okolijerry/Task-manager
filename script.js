$(".mail-choice").change(() => {
  if ($(this).is(":checked")) {
    $(this).parent().addClass("selected-bg");
  } else {
    $(this).parent().removeClass("selected-bg");
  }
});

const colorInput = document.getElementById("colorpicker");

colorInput.addEventListener("input", (e) => {
  document.body.style.setProperty("--button-color", e.target.value);
});

$(".inbox-calender").click(() => {
  $(".calender-container").toggleClass("calender-show");
  $(".inbox-container").toggleClass("hide");
  $(".mail-details").toggleClass("hide");
});
