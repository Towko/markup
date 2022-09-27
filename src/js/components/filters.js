$(function filtering() {

	let filter = $("[data-filter]");
	if ($(window).width() < 768) {
		$(".filters-arrow").on("click", function() {
			$(".filters").toggleClass("selected");
			if ($(".filters").hasClass("selected")) {
				$(".filters__link").css("display", "flex");
			} else {
				$(".filters__link:not(.active").css("display", "none");
			}
		})
	}
	else {
		$(".filters__link").css("display", "flex");
	}
	filter.on("click", function (event) {

		event.preventDefault();
		
		$(filter).removeClass("active");
		$(this).addClass("active");

		let category = $(this).data("filter");

		if (category == "all") {

			$("[data-category]").css("display", "flex");

		} else {
			
			$("[data-category]").each(function () {
				
				let current = $(this).data("category");
	
				if (current != category) {
					$(this).css("display", "none");
				} else {
					$(this).css("display", "flex");
				}
			})
			
		};

	});

})

$(window).resize(function() {
	if ($(window).width() < 768) {
		$(".filters__link:not(.active)").css("display", "none");
		$(".filters__link.active").css("display", "flex");
	}
   else {
		$(".filters__link").css("display", "flex");
   }
});

