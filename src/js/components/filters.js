jQuery(function filtering() {
    let filter = jQuery("[data-filter]");
    filter.on("click", function(event) {

        event.preventDefault();

        jQuery(filter).removeClass("active");
        jQuery(this).addClass("active");

        let category = jQuery(this).data("filter");

        if (category == "all") {

            jQuery("[data-category]").css("display", "flex");

        } else {
            jQuery("[data-category]").each(function() {
                let current = jQuery(this).data("category");

                let el = current.split(",");

                let result = el.filter(elem => elem == category)
                if (result != category) {
                    jQuery(this).css("display", "none");
                } else {
                    jQuery(this).css("display", "flex");
                }
            })

        };

    });

})

function dropfilter() {
    jQuery(".filters").on("click", function(event) {
        var target = jQuery(event.target);
        if (target.is(".active")) {
            jQuery(".filters").toggleClass("selected");
            if (jQuery(".filters").hasClass("selected")) {
                jQuery(".filters__link").css("display", "flex");
            } else {
                jQuery(".filters__link:not(.active").css("display", "none");
            }
        }
    });
};

jQuery(window).on("resize", function() {
    if (jQuery(window).width() < 768) {
        jQuery(".filters__link:not(.active").css("display", "none");
        dropfilter();
    } else {
        jQuery(".filters__link").css("display", "flex");
    }
});

if (jQuery(window).width() < 768) {
    dropfilter()
} else {
    jQuery(".filters__link").css("display", "flex");
}
















// jQuery(window).on("resize", function() {
//     if (jQuery(window).width() < 768) {
//         jQuery(".filters__link:not(.active").css("display", "none");
//         jQuery(".filters").on("click", function(event) {
//             var target = jQuery(event.target);
//             if (target.is(".active")) {
//                 jQuery(".filters").toggleClass("selected");
//                 if (jQuery(".filters").hasClass("selected")) {
//                     jQuery(".filters__link").css("display", "flex");
//                 } else {
//                     jQuery(".filters__link:not(.active").css("display", "none");
//                 }
//             }
//         })
//     };
//     if (jQuery(window).width() < 768) {
//         jQuery(".filters__link:not(.active").css("display", "none");
//         jQuery(".filters-arrow").on("click", function() {
//             jQuery(".filters").toggleClass("selected");
//             if (jQuery(".filters").hasClass("selected")) {
//                 jQuery(".filters__link").css("display", "flex");
//             } else {
//                 jQuery(".filters__link:not(.active").css("display", "none");
//             }
//         })
//     } else {
//         jQuery(".filters__link").css("display", "flex");
//     }
// });

// if (jQuery(window).width() < 768) {
//     jQuery(".filters").on("click", function(event) {
//         var target = jQuery(event.target);
//         if (target.is(".active")) {
//             jQuery(".filters").toggleClass("selected");
//             if (jQuery(".filters").hasClass("selected")) {
//                 jQuery(".filters__link").css("display", "flex");
//             } else {
//                 jQuery(".filters__link:not(.active").css("display", "none");
//             }
//         }
//     })
// };
// if (jQuery(window).width() < 768) {
//     jQuery(".filters-arrow").on("click", function() {
//         jQuery(".filters").toggleClass("selected");
//         if (jQuery(".filters").hasClass("selected")) {
//             jQuery(".filters__link").css("display", "flex");
//         } else {
//             jQuery(".filters__link:not(.active").css("display", "none");
//         }
//     })
// } else {
//     jQuery(".filters__link").css("display", "flex");
// }