$(document).ready(function() {
		console.log("Doc Ready")
    $('#fullpage').fullpage({
			anchors: ['home', 'About', 'Skills', 'Projects', 'Experience', 'Resume'],
		});
		$('.button').click(goTo);
});


function goTo(e){
	var page = e.target.text;
	$.fn.fullpage.moveTo(page);
}
