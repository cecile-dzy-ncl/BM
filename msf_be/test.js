function changeTitle(title) {
  var activeStepTitleContent = title.innerHTML.split("-")[1];
  $(".step-title").html(activeStepTitleContent);
}

if ($("#projects-new")) {
  $(".tab-content").prepend($("#step_tab"));
  $("#step_tab").after($("#error-message + .row"));
  $("#projects-new .container-event").before(
    "<h1 class='step-title text-center'></h1>"
  );
  var activeStepTitle = $(
    "#projects-new #form-project #step_tab .active a.click_tabs"
  )[0];
  // if (activeStepTitle) {
  //   // var activeStepTitleContent = activeStepTitle.innerHTML.split("-")[1];
  //   // $(".step-title").html(activeStepTitleContent);
  //   changeTitle(activeStepTitle);
  // }
  // $("input#step").change(function () {
  //   var activeStepTitle = $(
  //     "#projects-new #form-project #step_tab .active a.click_tabs"
  //   )[0];
  //   changeTitle(activeStepTitle);
  //   var stepNumber = $("input#step")[0].value;
  //   console.log(stepNumber);
  // });
  $("form#new_project").change(function () {
    //   var activeStepTitle = $(
    //     "#projects-new #form-project #step_tab .active a.click_tabs"
    //   )[0];
    //   changeTitle(activeStepTitle);
    //   var stepNumber = $("input#step")[0].value;
    //   console.log("if form", stepNumber);
    //   console.log("if form activeStepTitle", activeStepTitle);
    if ($("input#step")[0].value === "1") {
      console.log("if 1", activeStepTitle);
      // var activeStepTitle = $(
      //   "#projects-new #form-project #step_tab .active a.click_tabs"
      // )[0];
      // changeTitle(activeStepTitle);
    }
    if ($("input#step")[0].value === "2") {
      // var activeStepTitle = $(
      //   "#projects-new #form-project #step_tab .active a.click_tabs"
      // )[0];
      // changeTitle(activeStepTitle);
      console.log("if 2", activeStepTitle);
    }
    if ($("input#step")[0].value === "3") {
      // var activeStepTitle = $(
      //   "#projects-new #form-project #step_tab .active a.click_tabs"
      // )[0];
      // changeTitle(activeStepTitle);
      console.log("if 3", activeStepTitle);
    }
  });
}
