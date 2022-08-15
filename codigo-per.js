function numero() {
      var mensaje="Puedes acompañarme a mi chat permanente privado en Alienchat con este codigo " + codigo + "\n\ https://github.com/AngelAlonsoRamirez/AlienChat/raw/main/android.apk"
          app.OpenUrl( "https://api.whatsapp.com/send?text=" + mensaje);
    }