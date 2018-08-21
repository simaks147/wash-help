$(function() {

	// wrap brand-list by 4 item
	(function () {
		var item,
			items = $('.brand__item'),
			itemsParent = items.parent(),
			itemsCol,
			itemsWrap;

			itemsCol = $('<ul/>', {
				class: 'brand__list-col'
			});

			itemsWrap = $('<div/>', {
				class: 'brand__list-wrap'
			});

		for (var i = 0; i < items.length; i++) {
			
			itemsCol.append(items[i]);

			if (i === 7) {
				itemsWrap.append(itemsCol);

				itemsCol = $('<ul/>', {
					class: 'brand__list-col'
				});

				items = itemsParent.children('.brand__item');
				i = -1;
			}

			if (items.length < 8) {
				for (var i = 0; i < items.length; i++) {
					itemsCol.append(items[i]);
				}
				itemsWrap.append(itemsCol);
			}
		}
				
		itemsParent.append(itemsWrap);
	}());


	// $('.main-header__device-list a').each(function(index, el) {
	// 	if ( ( location.pathname.indexOf( $(this).attr('href') ) !== -1 )
	// 		|| ( $(this).attr('href') === 'index/') ) {
	// 		$(this).closest('li').addClass('current');
	// 	}
	// });



	// modal init
	$('#modal-submit').modal({
		opacity: .8,
		endingTop: '30%'
		// startingTop: '4%'
	});

	$('.modal-submit__close').on('click', function() {
		$('#modal-submit').modal('close');
	}); 


	// button for transition up
	$('.menu__back-to-top').on('click', function (e) {
		$('html, body').animate({scrollTop: 0}, 800);
	});

	$(window).on("scroll", function() {
		var scrollTop = $('html, body').scrollTop();
	  	
	  	if ( ( scrollTop > 400 ) && ( scrollTop + $(window).height() < $('.menu').offset().top ) ) {
	  		$('.menu__back-to-top').addClass('js-pos-fixed');
	  	}
	  	else {
	  		$('.menu__back-to-top').removeClass('js-pos-fixed');
	  	}
	});


	// collapse button init
  	$('.top-line__burger').sideNav({
  		closeOnClick: true
  	});

  	

  	$('.nav-mobile__close').click(function(){
		$('.top-line__burger').sideNav('hide');
	});



  	// btn for open review form
	$('.all-review__btn').click(function(){
		if ($('.all-review__form-wrap').hasClass("js-open-review")) {
			$('.all-review__form-wrap').removeClass('js-open-review');
		}else{
			$('.all-review__form-wrap').addClass('js-open-review');
		}

	});



	// slick init
  	$('.repair__list').slick({
	  	infinite: false,
	  	slidesToShow: 4,
	  	slidesToScroll: 4,
	  	draggable: false,
	  	dots: true,
	  	prevArrow: '<span class="slick-prev"></span>',
	  	nextArrow: '<span class="slick-next"></span>',
	  	appendArrows: $('.repair__slick'),
	  	appendDots: $('.repair__slick'),
	  	responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 3,
			  	slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 993,
		      settings: 'unslick'
		    }
		]
  	});

  	$(window).on("resize", function() {
	  	if ($(this).outerWidth() <= 992) {
	    	$('.repair__list').slick('unslick');
	  	}
	  	else {
	      	$('.repair__list').slick({
			  	infinite: false,
			  	slidesToShow: 4,
			  	slidesToScroll: 4,
			  	draggable: false,
			  	dots: true,
			  	prevArrow: '<span class="slick-prev"></span>',
			  	nextArrow: '<span class="slick-next"></span>',
			  	appendArrows: $('.repair__slick'),
			  	appendDots: $('.repair__slick'),
			  	responsive: [
				    {
				      breakpoint: 1201,
				      settings: {
				        slidesToShow: 3,
					  	slidesToScroll: 3,
				      }
				    },
				    {
				      breakpoint: 993,
				      settings: 'unslick'
				    }
				]
	  		});
	  	}
	});

  	$('.brand__list-wrap').slick({
	  	infinite: false,
	  	slidesToShow: 2,
	  	slidesToScroll: 2,
	  	draggable: false,
	  	dots: true,
	  	prevArrow: '<span class="slick-prev"></span>',
	  	nextArrow: '<span class="slick-next"></span>',
	  	appendArrows: $('.brand__slick'),
	  	appendDots: $('.brand__slick'),
	  	responsive: [
		    {
		      breakpoint: 601,
		      settings: {
		        arrows: false
		      }
		    }
		]
  	});

  	$('.review__list').slick({
	  	infinite: false,
	  	slidesToShow: 2,
	  	slidesToScroll: 2,
	  	draggable: false,
	  	dots: true,
	  	prevArrow: '<span class="slick-prev"></span>',
	  	nextArrow: '<span class="slick-next"></span>',
	  	appendArrows: $('.review__slick'),
	  	appendDots: $('.review__slick'),
	  	responsive: [
		    {
		      breakpoint: 993,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 601,
		      settings: {
		      	slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    }
		]
  	});

  	$('.master__list').slick({
	  	infinite: false,
	  	slidesToShow: 4,
	  	slidesToScroll: 2,
	  	draggable: false,
	  	dots: true,
	  	prevArrow: '<span class="slick-prev"></span>',
	  	nextArrow: '<span class="slick-next"></span>',
	  	appendArrows: $('.master__slick'),
	  	appendDots: $('.master__slick'),
	  	responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 993,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 601,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    }
		]
  	});

  	$('.info__list').slick({
	  	infinite: false,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	draggable: false,
	  	prevArrow: '<span class="slick-prev"></span>',
	  	nextArrow: '<span class="slick-next"></span>',
	  	responsive: [
		    {
		      breakpoint: 1201,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 993,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 601,
		      settings: {
		        slidesToShow: 3,
		        vertical: true
		      }
		    }
		]
  	});



  	// matchHeight init
  	$(function() {
	    $('.repair__item-h').matchHeight();
	});

  	$(function() {
	    $('.repair__item-text').matchHeight();
	});

	$(function() {
	    $('.scheme__item-text').matchHeight({byRow: false});
	});


  	

});
