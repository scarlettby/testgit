function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

(function() {

    oldies = getCookie("oldies"); 
    if (oldies != null) return;
    
//    expires = new Date();
//    expires.setMinutes(expires.getMinutes() + 30);
//    setCookie("oldies", oldies, expires.toGMTString()); 

    if (typeof browsers == 'undefined') return;

    val = browsers.split(';'); 
    for(var c=0; c < val.length; c++) {
       browserName = val[c].split(' ')[0];
       browserVersion = val[c].split(' ')[1];

       var lowerVersion=new Number(browserVersion); 
       
       var re = new RegExp(browserName + '[\\/\\s](\\d+\\.\\d+)');
       if (re.test(navigator.userAgent)){ 
          var curVersion=new Number(RegExp.$1); 
	  if (curVersion < lowerVersion) { // Display notify
             var message = 'For optimal viewing, it is recommended that you upgrade your browser.';
             document.write('<div id="oldies-bar" style="z-index: 65535; background: #ffffe1; font: 16px Verdana; text-align: center; border-bottom: 2px solid #716f64; border-top: 2px solid #e0dfd0; padding: 20px 0px; margin: 0; position: fixed; width:100%; left:0; top:0; _position: absolute; _top: expression(eval(document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)); _left: expression(eval(document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft)); _width: expression(eval(document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth));"><div style="display: block; float: right; padding: 2px 7px 2px 7px; margin: 0; cursor: pointer; font: 12px Verdana; color: #536482;" onclick="expires = new Date(); expires.setMinutes(expires.getMinutes() + 30); document.cookie=\'oldies=true; expires=\'+expires.toGMTString() + \'; path=/\'; document.getElementById(\'oldies-shadow\').style.display=\'none\'; document.getElementById(\'oldies-bar\').style.display=\'none\';">×</div>' + message + '</div><div id="oldies-shadow" style="height: 22px; padding: 0; margin: 0;"></div>');
	     break;
	  }
	  return;
       }
    }

})();