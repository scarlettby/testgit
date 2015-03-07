$(document).ready(function(){

	var activeElement = "img-village100-active-div";
	/*activate default venue stuff*/
	$("#" + activeElement).removeClass("hide");
	activelink = activeElement.split("-");
	activelink = 'link-'+activelink[1];
	$("#" + activelink).addClass("active");


	//event listener and function 
	$("#map div").mouseover( function(){

			id = $(this).attr("id");

//			alert(id);

			currentImage = id;
			temp = id.split("-");
			activeImage = temp[0]+"-"+temp[1]+"-active-"+temp[2];
			
			currentItem = (id).split("-");
			currentItem = currentItem[1];
			
			if(currentImage.match("-active") == null)
			{
				//to help it not through "is undefined" errors when you hammer it
				if(typeof(activeImage) == "undefined")
				{
					activeImage = activeElement;
				}
				
				/*change images over*/
				$("#" + activeImage).removeClass("hide");
				$("#" + activeElement).addClass("hide");
				activelink = activeElement.split("-");
				activelink = "link-"+activelink[1];
				$("#" + activelink).removeClass("active");
				
				activeElement = activeImage; //set new active image
				
				//find the new active link
				activelink = activeElement.split("-");
				activelink = "link-"+activelink[1];
				
				//make it active
				$("#" + activelink).addClass('active');


				 //scroll the content panel
				$("#" + currentItem).siblings().hide();
				$("#" + currentItem).show();
			}

			var activeDiv = document.getElementById(id);
			var childArray = activeDiv.childNodes;
			var i = 0;
			while(childArray[i].nodeName != 'A') {
			    i++;
			}
			var currentLinkValue = childArray[i].href;
			document.getElementById('btn_map').href = currentLinkValue;
	});


});

