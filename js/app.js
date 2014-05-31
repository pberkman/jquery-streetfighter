var still=$(".ryu-still");
var ready=$(".ryu-ready");
var throwing=$(".ryu-throwing");
var cool=$(".ryu-cool");

$(document).ready(function() {
  $(".ryu").mouseenter(function(){ 
  	$(".ryu-still").hide();
  	$(".ryu-ready").show();
  })
  .mouseleave(function() {
  	$(".ryu-ready").hide();
  	$(".ryu-still").show();
  })
  .mousedown(function() {
  	playHadouken();
  	$(".ryu-ready").hide();
  	$(".ryu-throwing").show();
  	$(".hadouken").finish().show()
      //moves hadouken left to right
	    .animate(
  		  {"left":"300px"}, 
  		  500,
  		  function() {
  			  $(this).hide();
  			  $(this).css("left","-212px");
  		  }
  	  );
  })
  .mouseup(function() {
  	$(".ryu-throwing").hide();
  	$(".ryu-ready").show();
  	//ryu goes back to his ready position
  });
    //places command on X key to put into ryu-cool position
  $("body").keydown(function(){
    if(event.which==88) {
  	  $(".ryu-still").hide();
  	  $(".ryu-ready").hide();
  	  $(".ryu-cool").show();
    }
  })
  .keyup(function() {
  	$(".ryu-cool").hide();
  	$(".ryu-still").show();
  })
});
//function to play sound for throwing
function playHadouken () {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();

}