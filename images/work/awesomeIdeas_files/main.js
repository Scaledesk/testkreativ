'use strict';
$(document).ready(function() {

	if($(window).width() >= 480){
		$('.button-nav').on('click' , function(e){
			$('.nav-menu').addClass('nav-menu-open');
			e.stopPropagation();
		});
		$('.close-btn').on('click' , function(){
			$('.nav-menu').removeClass('nav-menu-open');
		});	
	}
	if($(window).width() <= 479){
		$('.button-nav').on('click' , function(e){
			$('.nav-menu').css('left','30%');
			e.stopPropagation();
		});
		$('.close-btn').on('click' , function(){
			$('.nav-menu').css('left' , '100%');
		});	
	}

	/* ------------------ blog page ------------------*/
	
	function blogdetails(){
		var blogHeight= $('.blog-figc').outerHeight();
		$('.blog-containers').css('height' ,blogHeight );
		var blogHeights= $('.blgpg .blog-figc').outerHeight();
		$('.blgpg .blog-containers').css('height' ,blogHeights );
	}
	blogdetails(); 

	/*---------------- full page scroll -----------------*/	
	
	$('#home-menu').fullpage({
		responsiveWidth:992,
		anchors:['mainPage', 'aboutPage' , 'servicepage' , 'workpage' , 'teampage' , 'careerpage', 'blogpage' ,'contactpage'],
		recordHistory:false,
		menu: '#menu',
		touchstart:false,
		fitToSection: true,
		easing: 'easeInOutCubic',
		css3: true,
		fixedElements: '.header , .footer',
		normalScrollElements: '#work-menu , #team-menu , #blog-menu ,#service-menu ',
	    normalScrollElementTouchThreshold:0,

				 	
		afterSlideLoad: function(anchorLink, index ,slideIndex , sectionIndex){
			
			if(anchorLink == 'workpage' && slideIndex==1){
				$('.product-fig img').css('transform' , 'scale(1)');
			}
			// if (slideIndex  > 0 ) {
				
			// 	$('.footer , .header').css('display' ,'none');	
			// }else{
			// 	$('.footer , .header').css('display' , 'block');	
			// }
				
		},
		
		afterLoad:function(anchorLink ,slideIndex ){
			if($(window).width() >=992){
				if(anchorLink == 'servicepage' ){
					$('.service-inner.fig1').css({'left' :'0px' , 'top':'-69px'});
					$('.service-inner.fig2').css('left' ,'10px' );
					$('.service-inner.fig3').css({'left' :'50px' , 'bottom':'-115px'});
					$('.service-inner.fig4').css('bottom', '-115px');
					$('.service-inner.fig5').css('right', '48px');
					
				}
			}
		}
				
	});

	/*---------------------- scrolldown ------------- */		
	$('#go').on('click' , function(){
	    $.fn.fullpage.moveSectionDown();
	});
	
	
	/* --------------------prev  Next page ---------------*/	
	if($(window).width() >= 992){
		$('.work-btn , .team-btn , .blog-btn , .service-cnct').on('click' , function(e){
			$('.fp-next').trigger('click');
			e.stopPropagation();
			e.preventDefault();
			console.log('next');
		});
		$('.navbar-nav a , .footernav a , .logo-wrap a ').on('click' , function(){	
			$('.fp-prev').trigger('click');	
			console.log('prev');		
		});
		
	}
	
	
	if($(window).width() <= 991){
		$('.service-cnct').on('click' , function(e){
			var serviceHeight = $('.service-pg').innerHeight();		
			$('.service .fp-slides').css ('height' ,serviceHeight );
			$.fn.fullpage.moveTo('servicepage', 1);
			e.stopPropagation();
			e.preventDefault();	
			console.log('mobile next');

		});
		$('.srevice-prev').on('click' , function(e){	
			$('.service .fp-slides').css ('height' ,'auto' );
			$.fn.fullpage.moveTo('servicepage', 0);
			e.stopPropagation();
			e.preventDefault();
			console.log('mobile prev');

		});
		$(' .work-prev , .team-prev , .blog-prev').on('click' , function(e){	
			$('.fp-prev').trigger('click');
			$(this).closest('.fp-slides').css ('height' ,'auto' );		
			e.stopPropagation();
			e.preventDefault();	
		});
		
		$('.work-btn').on('click' , function(){
			var workHeight = $('.work-pg').innerHeight();		
			$('.work .fp-slides').css ('height' ,workHeight );
			$.fn.fullpage.moveTo('workpage', 1);
		});
		$('.team-btn').on('click' , function(){
			var teamHeight = $('.team-pg').innerHeight();		
			$('.team .fp-slides').css ('height' ,teamHeight );
			$.fn.fullpage.moveTo('teampage', 1);
		});
		$('.blog-btn').on('click' , function(){
			var blogHeight = $('.blog-pg').innerHeight();		
			$('.blog .fp-slides').css ('height' ,blogHeight );
			$.fn.fullpage.moveTo('blogpage', 1);
		});

	}	

	
});

/* ---------------------- mouse move -------------------- */
if ($(window).width() >= 992){
	$(function(){
	  
		var $parallaxContainer 	  = $('#about-mouse'); //our container
		var $parallaxItems		    = $parallaxContainer.find('.parallax');  //elements
		var fixer				          = 0.0008;		//experiment with the value
					
		$(document).on('mousemove', function(event){
								
			var pageX =  event.pageX - ($parallaxContainer.width() * 0.9);  //get the mouseX - negative on left, positive on right
			var pageY =  event.pageY - ($parallaxContainer.height() * 0.9); //same here, get the y. use console.log(pageY) to see the values
			//here we move each item
			$parallaxItems.each(function(){
				var item 	= $(this);
				var speed	= item.data('speed');  //getting the speed from data atribute
				TweenLite.to(item, 0.5, {
					x: (item.position().left + pageX * speed )*fixer,    //calculate the new X based on mouse position * speed 
					y: (item.position().top + pageY * speed)*fixer
				});
				var blurElement = {a:0};//start the blur at 0 pixels
				function applyBlur()
				{
				    TweenMax.set($('.main-img'), {webkitFilter:'blur('+ blurElement.a + 'px)'}); 
				}		
				TweenMax.to(blurElement,2, {a:10, onUpdate:applyBlur});
					//here you pass the filter to the DOM element
				
			});
		});	

		// homepage
		var $parallaxContainerH 	  = $('#home-mouse'); //our container
		var $parallaxItemsH		    = $parallaxContainerH.find('.parallaxHome');  //elements
		//var fixer				          = 0.0008;		//experiment with the value
					
		$(document).on('mousemove', function(event){
								
			var pageX =  event.pageX - ($parallaxContainerH.width() * 0.9);  //get the mouseX - negative on left, positive on right
			var pageY =  event.pageY - ($parallaxContainerH.height() * 0.9); //same here, get the y. use console.log(pageY) to see the values
			//here we move each item
			$parallaxItemsH.each(function(){
				var item 	= $(this);
				var speed	= item.data('speed');  //getting the speed from data atribute
				TweenLite.to(item, 0.5, {
					x: (item.position().left + pageX * speed )*fixer,    //calculate the new X based on mouse position * speed 
					y: (item.position().top + pageY * speed)*fixer
				});			
			});
		});				
	});
}
