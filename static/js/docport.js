jQuery(document).ready(function() {
	// Open/Close left menu elements

    $('.pages-tree-node').click(function(e) {
      $(this).toggleClass('active');
      $(this).children('a').children('span').children('svg').toggleClass('arrow-rotate')
      e.stopPropagation();
    });

    $(".toc-nav a").click(function() {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 400,
      });
      return false;
      });

    function toggleRightMenu(e){
        e.preventDefault();
        $("#menu-mask").toggleClass('menu-mask-visible');
        $("#right-menu").toggleClass('right-menu-visible')
        $("#menu-button").toggleClass('menu-button-hide');
        $("#chapter-button").toggleClass('chapter-button-hide');

    }

    function toggleChapterMenu(e){
        e.preventDefault();
        $("#chapter-button").toggleClass('chapter-button-hide');
        $("#chapter-menu").toggleClass('chapter-menu-show');
        $("#menu-button").toggleClass('menu-button-hide');

    }
    
    $("#menu-button").on('click touch', toggleRightMenu)
    $("#chapter-button").on('click touch', toggleChapterMenu)
    $("#menu-mask").on('click touch', toggleRightMenu)

    $("article").on('click touch',function(){
        $("#menu-button").removeClass('menu-button-hide')
        $("#right-menu").removeClass('right-menu-visible')
        $("#menu-mask").removeClass('menu-mask-visible');
        $("#chapter-button").removeClass('chapter-button-hide');
        $("#chapter-menu").removeClass('chapter-menu-show');
    })

    var images = $("article section.page img");
    // Change styles, depending on parameters set to the image
    images.each(function (index) {
        var image = $(this);
        var o = getUrlParameter(image[0].src);
        if (typeof o !== "undefined") {
            var h = o["height"];
            var w = o["width"];
            var c = o["classes"];
            image.css({
                width: function () {
                    if (typeof w !== "undefined") {
                        return w;
                    }
                },
                height: function () {
                    if (typeof h !== "undefined") {
                        return h;
                    }
                }
            });
            if (typeof c !== "undefined") {
                var classes = c.split(',');
                $.each(classes, function(i) {
                    image.addClass(classes[i]);
                });
            }
        }
    });

});

// Get Parameters from some url
var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
        var sURLVariables = url[1].split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            obj[sParameterName[0]] = sParameterName[1];
        }
        return obj;
    } else {
        return undefined;
    }
};

window.parent.postMessage(JSON.stringify({
    url: window.location.href,
  }), '*');
