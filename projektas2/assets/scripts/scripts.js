
$(document).ready(function(){
	$('[data-fancybox="gallery_pics"]').fancybox({
	      loop:true,
	      animationDuration: 300
	    });


	$('.button').click(function(){
		var name = $(this).attr('data-filter');
		if(name == 'all'){
			$('.image').show('1000');
		}
		else{
			$('.image').not('.'+name).hide('1000');
			$('.image').filter('.'+name).show('1000');
		}
	});
	$('.gallerynav a').click(function(){
		$(this).addClass('active').siblings()
	});


	// $(".hero_carousel").owlCarousel({
	// 	navigation : true, 
 //      slideSpeed : 300,
 //      paginationSpeed : 400,
 //      items: 1,
	// 		pagination: false,
 //    	rewindSpeed: 500
	// });

	$("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      items:1,
      nav:false,
      loop:true,
      autoplay:true,
      autoplaySpeed:80,
      navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']

 
  });

});	








