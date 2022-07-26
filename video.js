function video() {
var url = prompt("Pega aquí la url del video de Youtube o Twich.")
var url = url.replace(/ /gi,'');

if (url==="") {
} else if (url===null) {
} else {
        const mensajeId = Date.now();
        var d = new Date();
        var tiempo = d.getHours() + ":" + d.getMinutes()
        var fecha = d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear() + " <small>" + d.getHours() + ":" + d.getMinutes() + "</small>"
        url = url.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
        url = url.replace("https://youtu.be/","https://www.youtube.com/embed/");
        
        url = url.replace("https://m.twitch.tv/","https://player.twitch.tv/?channel=");
        url = url.replace("https://www.twitch.tv/","https://player.twitch.tv/?channel=");

        
        db.ref(chat + '/' + mensajeId).set({
            id: sessionId,
            mensaje: "<b>" + usuario + "</b><br>" + fecha +  '</i><br><center><iframe width="100%" height="300" style="border-radius: 6px;" src="' + url + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>'
  });
}

    }