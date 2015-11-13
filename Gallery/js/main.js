$(document).ready(function() {

	$(".galimg").find(".galimg").each(function(e) {

		if (this.width > this.height) {
			$(this).addClass("landscape");
		}

		else {
			$(this).addClass("portrait");
		}

	});

	var divw = $(".galimg").width();

	$("img").each(function(){

		$(this).height(divw);

	});

	$(window).on("resize", function(e) {

		var h = $(window).height();
		var w = $(window).width();

		console.log(h + "*" + w);

	});

});