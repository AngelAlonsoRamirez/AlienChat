function numero() {
      var mensaje="Puedes acompañarme a mi chat permanente privado en Alienchat con este codigo " + codigo + "\n\ https://play.google.com/store/apps/details?id=com.alienchat"
          app.OpenUrl( "https://api.whatsapp.com/send?text=" + mensaje);
    }