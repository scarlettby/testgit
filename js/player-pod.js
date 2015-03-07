$(document).ready(function(){
	
	$(".b-player-pod-content").css({
		"display" : "none"
	});
	
	$(".b-player-pod-item").css({
		"display" : "none"
	});
	
	$(".b-player-pod").css({
		"width" : $(".b-player-pod").parent().width() - 24 +"px",
		"height" : $(".b-player-pod").parent().height()+"px"
	});
	
	var withOutItemHeight = $(".b-player-pod-content").height();
	
	$(".b-player-pod-content").css({
		"width" : $(".b-player-pod").parent().width()+"px",
		"height" : $(".b-player-pod").parent().height() - 8 + "px"
	});

	
	$(".b-player-pod-mainblock").css({
		"height" : $(".b-player-pod-content").height() - 6 - withOutItemHeight + "px"
	});
	
	$(".b-player-pod-item").css({
		"display" : "block"
	});

	$(".b-player-pod-content").css({
		"display" : "block"
	});
	
	showThumbnails();
	
	//mega hack for IE positions
	function IEcornersHack() {
		$(".b-corner-t-l").css({"position" : "static"});
		$(".b-corner-t-r").css({"position" : "static"});
		$(".b-corner-b-l").css({"position" : "static"});
		$(".b-corner-b-r").css({"position" : "static"});
		$(".b-corner-t-l").css({"position" : "absolute"});
		$(".b-corner-t-r").css({"position" : "absolute"});
		$(".b-corner-b-l").css({"position" : "absolute"});
		$(".b-corner-b-r").css({"position" : "absolute"});
		$(".b-player-pod-thumbnails-button_left").css({"position" : "static"});
		$(".b-player-pod-thumbnails-button_right").css({"position" : "static"});
		$(".b-player-pod-thumbnails-button_left").css({"position" : "absolute"});
		$(".b-player-pod-thumbnails-button_right").css({"position" : "absolute"});
	}
	IEcornersHack();
	
	
	$(".b-player-pod-item-overlay-close").click(function(){
		$(this).parent(".b-player-pod-item-overlay").slideUp("fast");
	});

	$(".b-player-pod-thumbnails-show").click(function(){
		$(".b-player-pod-thumbnails-wraper").fadeIn("fast");
		$(this).fadeOut("fast");
		
		showThumbnails();
	});
	
	function showThumbnails(){
		var clickedItem;
		
		var thumbWidth = $(".b-player-pod-thumbnails").width();
		var thumbWidthSum = ($(".b-player-pod-thumbnails li").width()+4)*$(".b-player-pod-thumbnails li").size();
		var thumbItemWidth = $(".b-player-pod-thumbnails li").width()+4;
		var thumbNumber = thumbWidth/thumbItemWidth|0;
		var thumbNumberAll = $(".b-player-pod-thumbnails li").size();
		var clickLimit = -(thumbNumberAll-thumbNumber)*thumbItemWidth;
		
		if(thumbWidth<thumbWidthSum) {
			$(".b-player-pod-thumbnails ul").css({
				"width" : thumbWidthSum+"px"
			});
			
			
			if(thumbWidth<thumbWidthSum-8) {
			$(".b-player-pod-thumbnails-wraper").append('<div class="b-player-pod-thumbnails-button_left" style="opacity: 0.4;"></div><div class="b-player-pod-thumbnails-button_right"></div>');
			}
			
			var thumbPos = 0;
			$(".b-player-pod-thumbnails-button_left").click(function(){
				if (thumbPos<0) {
					thumbPos = thumbPos+thumbItemWidth;
					$(".b-player-pod-thumbnails ul").animate({
						left: thumbPos
					},300);
					$(".b-player-pod-thumbnails-button_right").css({"opacity": "1"});
					if (thumbPos>0-thumbItemWidth) {
						$(this).css({"opacity": "0.4"});
					}
				}
			});
			$(".b-player-pod-thumbnails-button_right").click(function(){
				if (thumbPos>clickLimit) {
					thumbPos = thumbPos-thumbItemWidth;
					$(".b-player-pod-thumbnails ul").animate({
						left: thumbPos
					},300);
					$(".b-player-pod-thumbnails-button_left").css({"opacity": "1"});
					if (thumbPos<clickLimit+thumbItemWidth) {
						$(this).css({"opacity": "0.4"});
					}
				}
			});
			IEcornersHack();
		}
		
		var itemTitle;
		var itemDescription;
		var itemURL;	
		
		$(".b-player-pod-thumbnails ul li a.thumb_type_image").click(function(){			
			$(".b-player-pod-thumbnails ul li a").removeClass("active");
			$(this).addClass("active");
			$(".b-player-pod-item").css({
				"display" : "none"
			});	
			itemTitle = $(this).attr("title");
			itemDescription = $(this).attr("data-description");
			itemMediaDescription = $(this).attr("media-description");
			itemURL = $(this).attr("href");			
			$(".b-player-pod-item-overlay-header").html(itemTitle);
			$(".b-player-pod-item-overlay-description").html(itemDescription);
			
			if ($(".b-player-pod-text") != null) {
				$(".b-player-pod-description-wrap").css({
					"height" : $(".b-player-pod-description-wrap").height() + "px"
				});
			
				$(".b-player-pod-text").html(itemMediaDescription);
			}
			
			$(".b-player-pod-item-content").html("<img src='"+itemURL+"' />");
			
			$(".b-player-pod-item-content img").css({
				"width" : "100%",
				"height" : "100%"
			});
			if (itemTitle !=''&itemDescription!='') {
				$(".b-player-pod-item-overlay").css({"display":"block"});
			}
			else {
				$(".b-player-pod-item-overlay").css({"display":"none"});
			}
			$(".b-player-pod-item").fadeIn();
			return false;
		});
		
		$(".b-player-pod-thumbnails ul li a.thumb_type_link").click(function(){			
			$(".b-player-pod-thumbnails ul li a").removeClass("active");
			$(this).addClass("active");
			$(".b-player-pod-item").css({
				"display" : "none"
			});	
			itemTitle = $(this).attr("title");
			itemDescription = $(this).attr("data-description");
			itemMediaDescription = $(this).attr("media-description");
			itemURL = $(this).attr("href");			
			
			window.location = itemURL;

			return false;
		});
		
		$(".b-player-pod-thumbnails ul li a.thumb_type_video").click(function(){			
			$(".b-player-pod-thumbnails ul li a").removeClass("active");
			$(this).addClass("active");
			$(".b-player-pod-item").css({
				"display" : "none"
			});
			itemTitle = $(this).attr("title");
			itemDescription = $(this).attr("data-description");
			itemMediaDescription = $(this).attr("media-description");
			itemURL = $(this).attr("href");	

			$(".b-player-pod-item-overlay-header").html(itemTitle);
			$(".b-player-pod-item-overlay-description").html(itemDescription);
			
			if ($(".b-player-pod-text") != null) {
				$(".b-player-pod-description-wrap").css({
					"height" : $(".b-player-pod-description-wrap").height() + "px"
				});
			
				$(".b-player-pod-text").html(itemMediaDescription);
			}
			
			$(".b-player-pod-item-content").html('<object><embed src="'+itemURL+'" allowscriptaccess="always" allowfullscreen="true" type="application/x-shockwave-flash" wmode="transparent"></embed><param name="wmode" value="transparent"></object>');
			
			$(".b-player-pod-item-content object").css({
				"width" : "100%",
				"height" : "100%"
			});
			$(".b-player-pod-item-content embed").css({
				"width" : "100%",
				"height" : "100%"
			});
			if (itemTitle !=''&itemDescription!='') {
				$(".b-player-pod-item-overlay").css({"display":"block"});
			}
			else {
				$(".b-player-pod-item-overlay").css({"display":"none"});
			}
			$(".b-player-pod-item").fadeIn();
			return false;
		});		
		
		$(".b-player-pod-thumbnails ul li a.thumb_brightcove_type_video").click(function(){			
			$(".b-player-pod-thumbnails ul li a").removeClass("active");
			$(this).addClass("active");
			$(".b-player-pod-item").css({
				"display" : "none"
			});
			itemTitle = $(this).attr("title");
			itemDescription = $(this).attr("data-description");
			itemMediaDescription = $(this).attr("media-description");
			itemURL = $(this).attr("href");	

			$(".b-player-pod-item-overlay-header").html(itemTitle);
			$(".b-player-pod-item-overlay-description").html(itemDescription);
	
			if ($(".b-player-pod-text") != null) {
				$(".b-player-pod-description-wrap").css({
					"height" : $(".b-player-pod-description-wrap").height() + "px"
				});
			
				$(".b-player-pod-text").html(itemMediaDescription);
			}
			
                        var playerObject = 
					'<!-- Start of Brightcove Player -->' +
					'<object wmode="transparent" id="myExperience' + itemURL + '" class="BrightcoveExperience">' +
					'  <param name="bgcolor" value="#FFFFFF" />' +
					'  <param name="wmode" value="transparent" />' +
					'  <param name="playerID" value="701933632001" />' +
					'  <param name="playerKey" value="AQ~~,AAAADcYDruk~,DXsIcQBciLmRX-djLFmWdzTAS5FBpsWT" />' +
					'  <param name="isVid" value="true" />' +
					'  <param name="dynamicStreaming" value="true" />' +
					'  <param name="autoStart" value="true" />' +
					'  <param name="@videoPlayer" value="' + itemURL + '" />' +
					'</object>' +
					'<!-- End of Brightcove Player -->';


		
			$(".b-player-pod-item-content").html(playerObject);
			
			brightcove.createExperiences();

			$(".b-player-pod-item-content object").css({
				"width" : "100%",
				"height" : "100%"
			});
			$(".b-player-pod-item-content embed").css({
				"width" : "100%",
				"height" : "100%"
			});
			if (itemTitle !=''&itemDescription!='') {
				$(".b-player-pod-item-overlay").css({"display":"block"});
			}
			else {
				$(".b-player-pod-item-overlay").css({"display":"none"});
			}
			$(".b-player-pod-item").fadeIn();
			return false;
		});		
		
	}
	
});