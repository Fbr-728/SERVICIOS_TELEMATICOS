var list = ['https://comunidad.udistrital.edu.co/gicoecol/files/2017/09/Escudo_UD.svg_.png', 
            'https://w7.pngwing.com/pngs/142/488/png-transparent-ud-las-palmas-2017-18-la-liga-dream-league-soccer-football-football-logo-football-boot-sports-thumbnail.png']
// Añadir un evento de clic a un botón

var boton = document.getElementById("CAMBIO")
var imagen = document.getElementById("image")
var flag = true

boton.addEventListener("click",function () {
    console.log("cliqueaste")
    if (flag) {
        imagen.src=list[0]
        flag = false
    } else {imagen.src=list[1]
        flag = true 

    }
});