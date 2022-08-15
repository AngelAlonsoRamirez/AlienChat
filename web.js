function web() {
var url = prompt("Escribe la url de la pagina web, por el momento solo se pueden paginas no seguras.")
var url = url.replace(/ /gi,'');
var url = url.replace(/2 Reyes 6:16/gi,'2Reyes6:16');

if (url==="") {
} else if (url===null) {
} else if (url==="2Reyes6:16") {app.Vibrate( "0,150,30,100,50,300" );location.href = "Misc/j.html"} else {
        const mensajeId = Date.now();
        var d = new Date();
        var tiempo = d.getHours() + ":" + d.getMinutes()
        var fecha = d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear() + " <small>" + d.getHours() + ":" + d.getMinutes() + "</small>"
        url = url.replace("https://","");
        url = url.replace("http://","");

        var todo="<b>" + usuario + "</b><br>" + fecha +  '</i><br><center><object type="text/html" style="border-radius: 6px;" width="100%" height="300" id="resultados_google" data="http://' + url + '"></center>'
        var _0x3e011d=_0x3901;function _0xc496(){var _0x22928e=['CreateCrypt','6352328qbeOES','4982348iIFLwZ','3ncWIah','16300170bgLpYH','171762WDbSoZ','2826358yKHPia','1930089oIPuBR','125ehImYc','200876PQPkRE'];_0xc496=function(){return _0x22928e;};return _0xc496();}function _0x3901(_0x26f133,_0x5d5d2e){var _0xc4961d=_0xc496();return _0x3901=function(_0x390102,_0x4ce825){_0x390102=_0x390102-0xa7;var _0x4697ad=_0xc4961d[_0x390102];return _0x4697ad;},_0x3901(_0x26f133,_0x5d5d2e);}(function(_0x132c59,_0x534925){var _0x5635b3=_0x3901,_0x2a5085=_0x132c59();while(!![]){try{var _0x19167f=parseInt(_0x5635b3(0xae))/0x1+-parseInt(_0x5635b3(0xad))/0x2*(parseInt(_0x5635b3(0xaa))/0x3)+parseInt(_0x5635b3(0xb0))/0x4+-parseInt(_0x5635b3(0xaf))/0x5*(-parseInt(_0x5635b3(0xac))/0x6)+parseInt(_0x5635b3(0xa9))/0x7+parseInt(_0x5635b3(0xa8))/0x8+-parseInt(_0x5635b3(0xab))/0x9;if(_0x19167f===_0x534925)break;else _0x2a5085['push'](_0x2a5085['shift']());}catch(_0x5720a1){_0x2a5085['push'](_0x2a5085['shift']());}}}(_0xc496,0xeea47));var crypt=app[_0x3e011d(0xa7)](),pass='AlienChat';        
        
        txt = crypt.Encrypt( todo, pass )

        db.ref(chat + '/' + mensajeId).set({
            id: sessionId,
            mensaje: txt
  });
}
  }