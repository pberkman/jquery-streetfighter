$(document).ready(function() {
  var isPosing = false;
  $(".ryu").mouseenter(function(){ 
  	if (isPosing == false) {
  		$(".ryu-still").hide();
  		$(".ryu-ready").show();
  	}
  })
  .mouseleave(function() {
  	if (!isPosing) {
  		$(".ryu-ready").hide();
  		$(".ryu-still").show();
  	}
  })
  .mousedown(function() {
  	if (!isPosing) {
	  	playHadouken();
	  	$(".ryu-ready").hide();
	  	$(".ryu-throwing").show();
	  	$(".hadouken").finish().show()
		.animate(
	  		{"left":"300px"}, 
	  		500,
	  		function() {
	  			$(this).hide();
	  			$(this).css("left","-212px");
	  		}
	  	  );
  	}
  	})
  .mouseup(function() {
  	if (!isPosing) {
	  	$(".ryu-throwing").hide();
	  	$(".ryu-ready").show();
  		//ryu goes back to his ready position
  	}
  });
  
  $("body").keydown(function(){
  	if(event.which==88) {
	  	isPosing = true;
	  	$(".ryu-still").hide();
	  	$(".ryu-ready").hide();
	  	$(".ryu-cool").show();
	  }
  })
  .keyup(function() {
  	$(".ryu-cool").hide();
  	$(".ryu-still").show();
	isPosing = false;
  })
});
function playHadouken () {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();

}
