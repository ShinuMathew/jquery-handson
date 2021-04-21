// This is the function which will be executed when the DOM is ready to be manipulated except for images
$(function () {
  // setTimeout(()=>{
  //     $(".red-box").fadeOut(2000)
  //     setTimeout(()=>{
  //         $(".green-box").fadeOut(2000)
  //         setTimeout(()=>{
  //             $(".blue-box").fadeOut(2000)
  //             $(".red-box").fadeIn(2000)
  //         }, 3000)
  //     }, 2000)
  // }, 1000)

  // $("#table_id").slideUp(2000)
  for (let i = 0; i < 100; i++) {
    // $(".red-box").fadeOut(100);
    // $(".green-box").fadeOut(200); // 200ms
    // $(".blue-box").fadeOut(300);
    // $(".red-box").fadeIn(300);
    // $(".green-box").fadeIn(200)
    // $(".blue-box").fadeIn(100);
    // $(".red-box").fadeTo(1000, 0.4)
    // $(".blue-box").fadeTo(1000, 0.6)
    // $(".green-box").fadeTo(1000, 0.8)
  }

  /*$(".green-box").fadeOut("slow");  // 600ms
  $(".red-box").fadeOut("fast"); // 200ms
  $(".blue-box").fadeOut("2000");
  $(".red-box").fadeIn(2000)*/
});

/*$(document).ready(function(){
  $("button").click(function(){
    if($(this).css("color") == "rgb(136, 0, 0)"){      
      $(this).css("color", "yellow")
      console.log($(this).css("color"))
    } else if($(this).css("color") == "rgb(255, 255, 0)"){
      $(this).css("color", "red")
    }      
    $(".black-box").fadeToggle(1000);
  });
});*/

$(document).ready(function () {
  $(".button").click(function () {
    // $(".black-box").fadeToggle(1000);
    // $("#table_id").fadeToggle(1000);]
    // $("#table_id").show(1000);
    // $("#table_id").hide(1000);
    // $("#table_id").toggle(1000);
    // $("#table_id").slideUp(2000)
    // $("#table_id").slideDown(2000)
    $("#table_id").slideToggle(1000);
  });
});

$(".button").focus(function () {
  $(this).css("background-color", "#cccccc");
});

$(document).ready(function () {
  $("#table_id").dataTable();
});

$(function () {
  $(".forward").click(function () {
    $(".black-box").animate(
      {
        "margin-left": "+=200px",
      },
      1000,
      "linear"
    );
  });
});

$(function () {
  $(".reverse").click(function () {
    $(".black-box").animate(
      {
        "margin-left": "-=200px",
      },
      2000,
      "linear"
    );
  });
});

$(function () {
  $(".disappear").click(function () {
    $(".black-box").animate(
      {
        "margin-left": "+=500px",
        opacity: 0,
      },
      500,
      "linear"
    );
  });
});

$(function () {
  $(".appear").click(function () {
    $(".black-box").animate(
      {
        "margin-left": "0px",
        opacity: 100,
      },
      500,
      "linear"
    );
  });
});

$(function () {
  $(".delete").click(function () {
    $(".black-box").animate(
      {
        "margin-left": "+=500px",
        opacity: 0,
        height: "50px",
        width: "50px",
      },
      500,
      "linear"
    );
  });
});

$(function () {
  $(".undo").click(function () {
    $(".black-box").animate(
      {
        "margin-left": "-=500px",
        opacity: 100,
        height: "80px",
        width: "80px",
      },
      500,
      "linear"
    );
  });
});

$(function () {
  $("#zoomer").hover(function () {
    $(this).animate(
      {
        "font-size": "32px",
        color: "#ff0000",
      },
      100,
      "linear"
    );
  });
});

$(function () {
  $("#zoomer").mouseleave(function () {
    $(this).animate(
      {
        "font-size": "16px",
      },
      100,
      "linear"
    );
  });
});

$(function() {
  $(".collect").click(function(){
    $(".black-box").animate({
      "margin-left": "+=200px",
      opacity: 0
    }, 1000, "linear", function(){
      $(".green-box").animate({
        "margin-left": "+=280px",
        opacity: 0
      }, 1000, "linear", function(){
        $(".blue-box").animate({
          "margin-left": "+=360px",
          opacity: 0
        }, 1000, "linear", function(){
          $(".red-box").animate({
            "margin-left": "+=440px",
            opacity: 0
          }, 1000, "linear")
        })
      })
    })
  })
})
