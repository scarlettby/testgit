$(document).ready(function(){
        if(document.getElementById("sliderdiv") != null) {
               $("#sliderdiv").slideUp("fast");
               $("#sliderdiv").slideDown("slow");

                document.getElementById("sliderdiv").style.visibility = "visible";
                if(document.getElementById("sliderDivLiId") != null) {
                        var openLiId = document.getElementById("sliderDivLiId").value;
                        if(document.getElementById(openLiId) != null) {
                                document.getElementById(openLiId).style.height = "auto";
                        }
                }
        }
        
        if(document.getElementById("sliderdiv2") != null) {
                if (document.getElementById("sliderdiv2").style.visibility != "visible") {
                        $("#sliderdiv2").slideUp("fast");
                        $("#sliderdiv2").slideDown("slow");                
                        document.getElementById("sliderdiv2").style.visibility = "visible";
                        if(document.getElementById("sliderDivLiId") != null) {
                                var openLiId = document.getElementById("sliderDivLiId").value;
                                if(document.getElementById(openLiId) != null) {
                                        document.getElementById(openLiId).style.height = "auto";
                                }
                        }
                }
        } 
        
        if(document.getElementById("footer_copyright_text") != null) {
		var currDate = new Date();
		document.getElementById("footer_copyright_text").innerHTML = "&copy; Center Parcs " + currDate.getFullYear();
        
        } 
       
});

var test = 1;

function showHideDive() {
        if(document.getElementById("byvillage") != null) {
                if(test == 1) {
                        $("#byvillage").slideUp("fast");
                        $("#byvillage").slideDown("slow");
                        document.getElementById("byvillage").style.visibility = "visible";
                        var openLiId = document.getElementById("spanLiInfo").value;
                        if(document.getElementById(openLiId) != null) {
                                document.getElementById(openLiId).style.height = "auto";
                        }

                        test = 2;
                } else {
                        $("#byvillage").slideUp("fast");
                        test = 1;
                }
        }
}