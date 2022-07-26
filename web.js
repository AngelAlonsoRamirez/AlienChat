function web() {
var url = prompt("Escribe la url de la pagina web, por el momento solo se pueden paginas no seguras.")
var url = url.replace(/ /gi,'');

if (url==="") {
} else if (url===null) {
} else {
        const mensajeId = Date.now();
        var d = new Date();
        var tiempo = d.getHours() + ":" + d.getMinutes()
        var fecha = d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear() + " <small>" + d.getHours() + ":" + d.getMinutes() + "</small>"
        url = url.replace("https://","");
        url = url.replace("http://","");

        db.ref(chat + '/' + mensajeId).set({
            id: sessionId,
            mensaje: "<b>" + usuario + "</b><br>" + fecha +  '</i><br><center><object type="text/html" style="border-radius: 6px;" width="100%" height="300" id="resultados_google" data="http://' + url + '"></center>'
  });
}
  }