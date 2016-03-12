
window.onload = function() {
    var min = 1,
        max = 10,
        num;
     num = Math.floor((Math.random() * max) + min) ;  //esto saca un numero aleatorio
     var frase;   

		switch(num) { //aqui se usal el numero random para ver que frase se va usar.
    case 1:
        frase="En tu vida nunca dejes de soñar. Nadie puede alejarte de tus sueños. -Tupac- " ;
        break;
    case 2:
        frase="Un cobarde muere mil veces. Un soldado solo una vez. -Tupac-";
        break;
    case 3:
        frase="Si eres un verdadero rapero, no puedes dejar de rapear. -Ice T- ";
        break;
     case 4:
        frase="Nunca he sido competitivo con nadie, solo conmigo mismo. -Ice T-";
        break;
    case 5:
        frase="Y la radio aun sigue llena y poniendo la misma basura que solo de escucharla me hace reir. -MC Ren- ";
        break;
    case 6:
        frase="Recuerda es tu vida y tu tiempo. Asi que haz lo que deseas. -Eazy E- ";
        break;
    case 7:
        frase="Un cobarde muere mil veces. Un soldado solo una vez. -Tupac-";
        break;  
    case 8:
        frase="La primera vez que me meti en el mundo del rap soñaba en poder unificar a todos los raperos. -Ice T-";
        break;
    case 9:
        frase="Si encuentras algo para vivir, Mejor encuentra algo por lo que morir. -Tupac-";
        break;
                          
    
    }
    document.getElementById("palabra").innerHTML = frase; //aqui se le dice el id que va buscar en el html pa tirale la frase.
}


