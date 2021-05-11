/// <reference path="../typings/globals/jquery/index.d.ts" />

/**__________________Scroll______________________________ */
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop(); // destance from top site
  let offsetDetailsSec = $("#details").offset().top;

  if (scrollTop >= offsetDetailsSec -100) {
    $("#sideBox").addClass("stickySideBar");
    $("#toggleIcone").addClass("stickyToggIcone");
    $(".btn-up").fadeIn(1000);
  } else {
    $("sideBox").css("backgroundColor", "transparent");
    $("#sideBox").removeClass("stickySideBar");
    $("#toggleIcone").removeClass("stickyToggIcone");

    $(".btn-up").fadeOut(1000);
  }
});
/**_____________button up____________________________ */

$(".btn-up").click(function () {
  let homeSec = $(".home").offset().top;
  $("body , html").animate(
    {
      scrollTop: homeSec,
    },
    2000
  );
});

/**____________side bar link________________________ */
$(".side-link").click(function () {
  let hrefId = $(this).attr("href");
  let secOffset = $(hrefId).offset().top;

  $("body , html").animate(
    {
      scrollTop: secOffset,
    },
    2000
  );
});
 let sideBoxWidth = $("#sideBox").innerWidth();
$("#toggleIcone").click(function () {
  // $("#colorBox").toggle();

 
  if ($("#sideBar").css("left") == "0px") {
    $("#sideBar").animate(
      {
        left: `-${sideBoxWidth}px`,
      },
      1000
    );
  } else {
    $("#sideBar").animate(
      {
        left: "0px",
      },
      1000
    );
  }
});

/**_____________________on load_______________________ */

$(document).ready(function(){
  $("#sideBar").css({ left: `-${sideBoxWidth}px` });
})


/** _________details______________________________________*/
$(".singer-info").click(function () {
  // alert("hhhhhh");
  $(this).next("p").slideToggle(500);

  $(".singerToggle p").not($(this).next()).slideUp(500);
});


/** ________________time counter________________________________*/

// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");

// dayss= days.innerHTML = `<h3> D</h3>`;
// hours.innerHTML = `<h3> H</h3>`;
// minutes.innerHTML = `<h3> M</h3>`;
// seconds.innerHTML = `<h3> S</h3>`;

  $("#duration .row").countdown("2021/07/01", function (event) {
    $(this).html(
      event.strftime(
        `<div class="col-lg-3 col-sm-3">
        <div class="count-box">
              <h5>
              %d D
              </h5>
            </div></div>

            <div class="col-lg-3 col-sm-3">
          <div class="count-box">
              <h5>
                %H H
              </h5>
            </div> 
            </div>
            <div class="col-lg-3 col-sm-3">
            <div class="count-box">
              <h5>
                %M M
              </h5>
            </div>
            </div>
            <div class="col-lg-3 col-sm-3">
            <div class="count-box">
              <h5>
                %S S
              </h5>
            </div> </div>`
      )
    );
  });
/**_____________________________form text area___________________________ */

charnum;

$("textarea").keypress(function (e) {
  var tval = $("textarea").val(),
    tlength = tval.length,
    set = 10,
    remain = parseInt(set - tlength);
  $("#charnum").text(remain);
  if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
    $("textarea").val(tval.substring(0, tlength - 1));
    return false;
  }
});
