if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){loaded();});}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){loaded();});}
function loaded(){setInterval(loop,400);}
var x=0;var titleText=["naked.kids","naked.kid","naked.ki","naked.k","naked.","naked","nake","nak","na","n"];function loop(){document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];}
