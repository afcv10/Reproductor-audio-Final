
        var song = document.getElementById("cancion");

    
   function reproducir() {
        if(song.paused){
            song.play();
        }else{
            song.pause();
        }
    }
