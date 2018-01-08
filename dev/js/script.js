$(document).ready(function () {

      $('.js__bottom-ladies-slider').slick({
         nextArrow: '.bottom-ladies__slider-next',
         prevArrow: '.bottom-ladies__slider-prev',
         dots: false,
         infinite: true,
         autoplay: true,
         autoplaySpeed: 2000,
         speed: 300,
         slidesToShow: 8,
         slidesToScroll: 1
        });

  /*   $('.other-cont-img-slider').slick({
         nextArrow: '.other-cont-img-slider-next',
         prevArrow: '.other-cont-img-slider-prev',
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1
        });*/
     var slIndex = 0;
     $('.other-cont-img-slider').each(function(){
         slIndex++;
         $(this).parent().find('.other-cont-img-slider-next').attr('data-slider', slIndex);
         $(this).parent().find('.other-cont-img-slider-prev').attr('data-slider', slIndex);
         var slItems = $(this).find('.other-cont-slider-item');
         var slItemsCount = slItems.length;
         if (slItemsCount<2){
             $(this).parent().find('.other-cont-img-slider-next').hide();
             $(this).parent().find('.other-cont-img-slider-prev').hide();
         }
         $(this).slick({
             nextArrow: '.other-cont-img-slider-next[data-slider='+slIndex+']',
             prevArrow: '.other-cont-img-slider-prev[data-slider='+slIndex+']',
             dots: false,
             infinite: true,
             speed: 300,
             slidesToShow: 1,
             slidesToScroll: 1
          });
     })


    $(".other-cont-slider-link").fancybox({

	});


    $('.like-small-img').click(function(){
       var currentIdx = $(this).index();
        var array = $(this).parent().find('.like-small-img');
      var length =  array.length;


        for(var i = 0; i<=currentIdx; i++){
            var currentItem = array[i];
            $(currentItem).addClass('selected');
        }

       for(var i = length; i>currentIdx; i--){
            var currentItem = array[i];
            $(currentItem).removeClass('selected');
        }

    });

    var itemsWithVideo = $('.other-cont-slider-item video')
    if(itemsWithVideo.length>0){
        $(itemsWithVideo).each(function(idx, item){
            $(item).parent().addClass('video');
        })



    }

});
