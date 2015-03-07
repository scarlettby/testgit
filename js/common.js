
var numTabs; 
var prevClickedTab = -1; 
var autoRotate;
var rotateSpeed = 7000; 
var currentTab = 1;

var clicktimer;

$(function() {

/*  Box color initialisation
--------------------------------------------------------*/
/*$('.outer.block').each( function( intIndex ){
	$(this).children('.inner_divider').css ('background-color', $(this).children('.box_color').css('background-color'));
});
*/

/*  Roll-over list initilisation
--------------------------------------------------------*/
$('.roll_list li a').hover(function () {	
	var color = $(this).parent().parent().parent().parent().children('.box_color_hover').css('background-color');
	$(this).css('background-color', color);
	$('.roll_list .drop_menu li a').css('background-color','#e2e5cc');
	
}, function() {
	$('.roll_list li a').css('background-color', $(this).parent().css('background-color'));
});

$('.roll_list .drop_menu li a').hover(function () {	
/*	var color = $(this).parent().parent().parent().parent().parent().parent().parent().children('.box_color_hover').css('background-color'); */
        var color = $(this).parent().parent().children('.sub_box_color_hover').css('background-color');
	$(this).css({'background-color':'#e2e5cc'});
/*	$(this).css('background-color', color);  */
	
}, function() {
	$('.roll_list .drop_menu li a').css('background-color','#e2e5cc');
/*	$('roll_list .drop_menu li a').css('background-color', $(this).parent().css('background-color'));  */
});

/*  Fade in / fade out features block
--------------------------------------------------------*/
$('.fade').click(function() {
	if($(this).parent().parent().next().find('.feat_block').is(':hidden')) {
		$(this).parent().parent().find('.action_arrow').removeClass('off');
		$(this).parent().parent().find('span').text('Hide');
		$(this).parent().parent().next().find('.feat_block').slideDown();
	} else {
		$(this).parent().parent().find('span').text('Show');
		$(this).parent().parent().find('.action_arrow').addClass('off');
		$(this).parent().parent().next().find('.feat_block').slideUp();
	}
});


//camera tooltip action
$('.ttip_holder').hover(function() { 
	if($(this).is('.info')) {
		$(this).parent('a').css('z-index', '1100');
		
		$(this).parent().children('.hover').css('display', 'none');
		$(this).parent().children('.def').css('display', 'block');
		
	} else if ($(this).is('.camera')) {
		$(this).addClass('on');
	}
	$(this).children('.h_tooltip').css('display','block');
	}, function() {
	        $(this).parent().children('.hover').css('display', 'block');
		$(this).parent().children('.def').css('display', 'none');
		
		$('.acc_part .acc_types a').css('z-index', '1000');
		$('.camera').removeClass('on');
		$('.h_tooltip').css('display','none');
});

/*  Accomodation by Bedroom - radio buttons actions
--------------------------------------------------------*/

if($("input:radio[name='Village']:checked")) {
	var checked = $("input:radio[name='Village']:checked");
	if (checked.length > 0) {
		addCheckStyle(checked, 'Village');
	}
}

if($("input:radio[name='NumBed']:checked")) {
	var checked = $("input:radio[name='NumBed']:checked");
	if (checked.length > 0) {
		addCheckStyle(checked, 'NumBed');
	}
}


$('.radio_el').click(function() {
	var currUrl  = window.location.href;
	var currFolder =  window.location.pathname;
	
	var domenNum = currUrl.length - currFolder.length; 
	var domen = currUrl.substr(0,domenNum);
	
	var refUrl = $(this).attr('href');
	
	window.location = domen + refUrl;
});

/*  Blue Village Map Tooltip
--------------------------------------------------------*/

$('a.village_btn').hover(function() {
	$(this).children('.orig').addClass('off');
	$(this).children('.rollover').addClass('switch_on');
	
	$('.ttip_info').css('display', 'none'); 
	$(this).next('.ttip_info.vllg').css('display', 'block');
	
	}, function() {
		$(this).children('.rollover').removeClass('switch_on');
		$(this).children('.orig').removeClass('off');
		
		//change tooltip village descripr
		$(this).next('.ttip_info').css('display', 'none');
		$('.ttip_info.def').css('display', 'block')
});
	
	
/*  Gallery Viewer:  Accomodation Types rollover
--------------------------------------------------------*/

$('#gallery_viewer .acc_types  a').hover(function() {
	$(this).children('.def').css('display', 'none');
    	$(this).children('.hover').css('display', 'block');

	}, function() {
		$(this).children('.hover').css('display', 'none');
		$(this).children('.def').css('display', 'block');
	});
				
	//Rotate next thumbnails set
	$('.thumbs_wrapper .nav_buttons .next').click(function() {
		gallery.nextPage();
		return false;
	});
	
	//Rotate previous thumbnails set
	$('.thumbs_wrapper .nav_buttons .prev').click(function() {
		gallery.previousPage();
		return false;
	});

	$('div.content').css('display', 'block');

	if ($("#gallery_viewer").length > 0){
	
		// Initialize Advanced Galleriffic Gallery
		var gallery = $('#thumbs').galleriffic({
			delay:                     2500,
			numThumbs:                 8,
			preloadAhead:              10,
			enableTopPager:            false,
			enableBottomPager:         true,
			maxPagesToShow:            7,
			imageContainerSel:         '#slideshow',
			controlsContainerSel:      '#controls',
			captionContainerSel:       '#caption',
			loadingContainerSel:       '#loading',
			renderSSControls:          true,
			renderNavControls:         true,
			playLinkText:              'Play Slideshow',
			pauseLinkText:             'Pause Slideshow',
			prevLinkText:              '&lsaquo; Previous Photo',
			nextLinkText:              'Next Photo &rsaquo;',
			nextPageLinkText:          'Next &rsaquo;',
			prevPageLinkText:          '&lsaquo; Prev',
			enableHistory:             false,
			autoStart:                 false,
			syncTransitions:           true,
			defaultTransitionDuration: 900,
			
			onPageTransitionOut:       function(callback) {
				this.fadeTo('fast', 0.0, callback);
			},
			onPageTransitionIn:        function() {
				this.fadeTo('fast', 1.0);	
			},
			buildPager: function() {
				$('div.nav_buttons p').remove();
				
				var numPages = this.getNumPages();
				var currentPage = this.getCurrentPage() + 1;
				
				var pagesInfo = '<p class="numInfo">Page ' + currentPage + ' of ' + numPages + '</p>';
				$('div.nav_buttons').prepend(pagesInfo);
				
				if (numPages < 2) {
					$('.thumbs_wrapper .nav_buttons .prev').addClass('disabled');
					$('.thumbs_wrapper .nav_buttons .separator').addClass('off');
					$('.thumbs_wrapper .nav_buttons .next').addClass('disabled');
				}
				else if (currentPage == 1) {
					$('.thumbs_wrapper .nav_buttons .prev').addClass('disabled');				
					$('.thumbs_wrapper .nav_buttons .separator').removeClass('off');					
					$('.thumbs_wrapper .nav_buttons .next').removeClass('disabled');
				}
				else if (numPages == currentPage) {
					$('.thumbs_wrapper .nav_buttons .prev').removeClass('disabled');
					$('.thumbs_wrapper .nav_buttons .separator').removeClass('off');
					$('.thumbs_wrapper .nav_buttons .next').addClass('disabled');				
				}
				else {
					$('.thumbs_wrapper .nav_buttons .prev').removeClass('disabled');
					$('.thumbs_wrapper .nav_buttons .separator').removeClass('off');
					$('.thumbs_wrapper .nav_buttons .next').removeClass('disabled');
				}
				
			}
		});	
	}
	
	
/*  Tabs rotation
--------------------------------------------------------*/	
	currentTab = $(".tabbed-box .tabs li a").not(".sub_menu").index($("a[class='opened']"));

	numTabs = $('.tabbed-box .tabs li a').not(".sub_menu").length;
	
	$('.tabbed-box .tabs li a').not(".sub_menu").click(function(ev)
	{
            openTab($(this)); 
	    clicktimer = window.setTimeout('clickTimerFunction()', 1000);
            return false; 
        });
	
	$('.tabbed-box .tabs li').mouseover( function(){
		clearInterval(autoRotate); 
		$(this).children('.tab_hover').css('display', 'block');

		if($(this).children('a.opened').length == 0){
			var hoverColor = $(this).parent().parent().parent().parent().children('.box_color_hover').css('background-color');
			$(this).children('a').css('background-color', hoverColor);
		}
	})
		.mouseout(function(){ 
		$('.tabbed-box .tabs li').children('.tab_hover').css('display', 'none');
		$('.tabbed-box .tabs li a').css('background-color', 'transparent');
		$('.tabbed-box .tabs li a.opened').css('background-color', $('.tabbed-box .tabs li a.opened').parent().parent().parent().parent().parent().children('.box_color').css('background-color'));
		setTimeout('startRotation()', 7000);
		});
	
	$(".tabbed-box .tabs li a").not(".sub_menu").eq(currentTab).click();
	$(".tabbed-box").mouseout();
	startRotation();
	prevClickedTab = -1;

});

function startRotation() {
  clearInterval(autoRotate);
  autoRotate = setInterval('rotateTabs()', rotateSpeed);
} 

function openTab(clickedTab) {
	var thisTab = $(".tabbed-box .tabs a").not(".sub_menu").index(clickedTab); 
        var prevTab = $(".tabbed-box .tabs li a").not(".sub_menu").index($("a[class='opened']"));
        
        if (thisTab != prevTab) {
		window.clearTimeout(clicktimer);
		clicktimer = null;
        	prevClickedTab = -1;
       	}
	
	$(".tabbed-box .tabs li a").not(".sub_menu").removeClass("opened");
	$(".tabbed-box .tabs li .tab_active").css('display','none');
	$(".tabbed-box .tabs li a").not(".sub_menu").css('background-color', 'transparent');
	
	$(".tabbed-box .tabs li a").not(".sub_menu").eq(thisTab).addClass("opened");
	$(".tabbed-box .tabs li a").not(".sub_menu").eq(thisTab).parent().children('.tab_active').css('display', 'block');
	var color = $(".tabbed-box .tabs li a").not(".sub_menu").eq(thisTab).parent().parent().parent().parent().parent().children('.box_color').css('background-color');
	$(".tabbed-box .tabs li a").not(".sub_menu").eq(thisTab).css('background-color', color);
		
	$(".tabbed-wrap .tabbed-content").css('display', 'none');
	$(".tabbed-wrap .tabbed-content").eq(thisTab).css('display','block');
	
        currentTab = thisTab;
        
    if (currentTab == prevClickedTab) {
        var currUrl  = window.location.href;
        var currFolder =  window.location.pathname;
    
        var domenNum = currUrl.length - currFolder.length; 
        var domen = currUrl.substr(0,domenNum);

        var refUrl = $(".tabbed-wrap .tabbed-content").eq(thisTab).children("a").attr("href");
    
        if (typeof(refUrl) != "undefined") {
            window.location = domen + refUrl;
        }
    }
}

function rotateTabs() {
	var nextTab = (currentTab == (numTabs - 1)) ? 0 : currentTab + 1;
	openTab($(".tabbed-box .tabs li a").not(".sub_menu").eq(nextTab));
}

function addCheckStyle(checked, radioType) {
	if(radioType == 'NumBed') {
		$('.radio_el.bed').css({'background-color':'transparent', 'font-weight': 'normal'});
		if($('.radio_el.bed .radio_corn.right').length > 0) {
			$('.radio_el.bed .radio_corn.left').remove();
			$('.radio_el.bed .radio_corn.right').remove();
		}
	} else if(radioType == 'Village'){
		$('.radio_el.vil').css({'background-color':'transparent', 'font-weight': 'normal'});
		if($('.radio_el.vil .radio_corn.right').length > 0) {
			$('.radio_el.vil .radio_corn.left').remove();
			$('.radio_el.vil .radio_corn.right').remove();
		}
	}
	
	//show disign for checked radio buttons
	$(checked).parent().parent().css({'background-color':'white', 'font-weight': 'bold'});
	$(checked).parent().before('<div class="radio_corn left"></div>');
	$(checked).parent().next().after('<div class="radio_corn right"></div>');
}

function clickTimerFunction() {
	window.clearTimeout(clicktimer);
	clicktimer = null;
        prevClickedTab = currentTab;
}	
