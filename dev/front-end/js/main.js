 // Header scroll class

 var header = $('nav');

    $(window).scroll(function(e){
        if(header.offset().top !== 0){
            if(!header.hasClass('shadow')){
                header.addClass('shadow');
                header.addClass('scrolling_navbar');

            }
        }else{
            header.removeClass('shadow');
            header.removeClass('scrolling_navbar');

        }
    });

