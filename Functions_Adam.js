// Ändrar bakgrundsfärg till ljusblå
function change_backround(){
    document.body.style.background = "aqua";
    }

// Tar fram en rubrik (h1)
function good_vibes(){
    document.getElementById("heading").innerHTML = "Be the best version of you!";   
    }
    
 // Ändrar bilden från id till en liknande länkad bild
function switch_pic(){
    document.getElementById("image").src = "binaryNum2.jpg", height="30%", width="15%";
    }
    
    // Tar bort den nuvarande bilden
function hide_pic(){
    document.getElementById("image").style.display = 'none';
    }
    
    // Tar fram bilden som hade blivit bort tagen av ovanstående funktion
function show_pic(){
    document.getElementById("image").style.display = 'initial';
    }
    
    
    
    // Tar fram lokal tid och visar det (textbaserad/digital)
function show_time(){
    var active_time = new Date();
    document.getElementById("text_clock").innerHTML = active_time    
    }

    





    /* För att flytta diven med klassen .header  */
function move_header(){
    const head = document.getElementById('heading');
    const move_picture = document.getElementById('image');

    /* Ser till så att våran head har header klassen */
    if (head.className == "flexbs"){
        head.className = head.className + "head_er";

        move_picture.style.padding = "5px";
        move_picture.style.background = "blue";
        return
    }

    head.className = head.className.slice(0, -7);

    move_picture.style.padding = "4px";
    move_picture.style.background = "none";

}


/* För att ta bort Header Diven med simpel display none */
function headerRemove(){
    const head = document.getElementById('heading');
    head.style.display = "none";
    
}




/* För att visa Header diven med display flex och hur den ska va displayad med flex direction column */
function headerDisplay(){
    const head = document.getElementById('heading');
    head.style.display = "flex";
    head.style.flexDirection = "column";
}