function showhideHeader(objId, color, unselecColor) {
    if (document.getElementById("tab0")) {
        document.getElementById("tab0").className = 'bgtab';
        document.getElementById("tab0").style.backgroundColor =  unselecColor;
    }

    if (document.getElementById("tab1")) {
        document.getElementById("tab1").className = 'bgtab';
        document.getElementById("tab1").style.backgroundColor =  unselecColor;
    }

    if (document.getElementById("tab2")) {
        document.getElementById("tab2").className = 'bgtab';
        document.getElementById("tab2").style.backgroundColor =  unselecColor;
    }

    if (document.getElementById("tab3")) {
        document.getElementById("tab3").className = 'bgtab';
        document.getElementById("tab3").style.backgroundColor =  unselecColor;
    }

    if (document.getElementById("tab4")) {
        document.getElementById("tab4").className = 'bgtab';
        document.getElementById("tab4").style.backgroundColor =  unselecColor;
    }

    if (document.getElementById("tab5")) {
        document.getElementById("tab5").className = 'bgtab';
        document.getElementById("tab5").style.backgroundColor =  unselecColor;
    }

    document.getElementById('header').style.backgroundColor=color;
    document.getElementById('brdiv').style.color=color;

    if (document.getElementById(objId)) {
        document.getElementById(objId).className = 'colortab';
        document.getElementById(objId).style.backgroundColor = color;
    }

}

function showhideText(objTextId){
    if (document.getElementById("headerDiv0")) {
        document.getElementById("headerDiv0").className = 'hideDiv';
    }

    if (document.getElementById("headerDiv1")) {
        document.getElementById("headerDiv1").className = 'hideDiv';
    }
    
    if (document.getElementById("headerDiv2")) {
        document.getElementById("headerDiv2").className = 'hideDiv';
    }
    
   if (document.getElementById("headerDiv3")) {
        document.getElementById("headerDiv3").className = 'hideDiv';
    }
    
    if (document.getElementById("headerDiv4")) {
        document.getElementById("headerDiv4").className = 'hideDiv';
    }
    
    if (document.getElementById("headerDiv5")) {
        document.getElementById("headerDiv5").className = 'hideDiv';
    }

    if (document.getElementById(objTextId)) {
       document.getElementById(objTextId).className = 'showDiv';
    }
}

function showImage(src){
    document.getElementById('headerImage').src=src;
}
