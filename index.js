$(".togl1").hide();
$(".togl, .togl1").click(function(){
    $(".togl, .togl1").toggle();
});

$(".togl3").hide();
$(".togl2, .togl3").click(function(){
    $(".togl2, .togl3").toggle();
});

$(".togl5").hide();
$(".togl4, .togl5").click(function(){
    $(".togl4, .togl5").toggle();
});

$(".see").hide();
$(".hob1, .see").hover(function(){
    $(".hob1, .see").toggle();
})

$(".see1").hide();
$(".hob2, .see1").hover(function(){
    $(".hob2, .see1").toggle();
})

$(".see2").hide();
$(".hob3, .see2").hover(function(){
    $(".hob3, .see2").toggle();
})


$(".see3").hide();
$(".hob4, .see3").hover(function(){
    $(".hob4, .see3").toggle();
})


$(".see4").hide();
$(".hob5, .see4").hover(function(){
    $(".hob5, .see4").toggle();
})

$(".see5").hide();
$(".hob6, .see5").hover(function(){
    $(".hob6, .see5").toggle();
})

$(".see6").hide();
$(".hob7, .see6").hover(function(){
    $(".hob7, .see6").toggle();
})

$(".see7").hide();
$(".hob8, .see7").hover(function(){
    $(".hob8, .see7").toggle();
})


$('form').submit(()=>{
    let userName= $('#user-name').val();
    alert(`Success! Dear ${userName}, Your response has been received. Thank you for contacting Delani Studio.`)
  })