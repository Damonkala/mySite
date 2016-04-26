$(document).foundation();
var reading = false;
$(document).ready(function() {
		console.log("Doc Ready")
    $('#fullpage').fullpage({
			anchors: ['About', 'Skills', 'Projects', 'Experience'],
		});
		$('.subject').click(goTo);
		$('.magicModal').click(disAble);
		$('.close-button').click(enAble);
});


function goTo(e){
	if(!reading){
		var page = e.target.text;
		console.log(page)
		$.fn.fullpage.moveTo(page);
	}
}
function disAble(){
	reading = true;
	$.fn.fullpage.setMouseWheelScrolling(false);
	$.fn.fullpage.setAllowScrolling(false);
}
function enAble(){
	reading = false;
	$.fn.fullpage.setMouseWheelScrolling(true);
	$.fn.fullpage.setAllowScrolling(true);
}
