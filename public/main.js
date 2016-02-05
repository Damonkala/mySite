$(document).ready(function() {
		console.log("Doc Ready")
    $('#fullpage').fullpage({
			anchors: ['Home', 'About', 'Skills', 'Projects', 'Experience'],
		});
		$('.subject').click(goTo);
});


function goTo(e){
	var page = e.target.text;
	console.log(page)
	$.fn.fullpage.moveTo(page);
}
