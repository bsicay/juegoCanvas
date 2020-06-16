var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", moverCerdo);
var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(5, 25);
var positionX = new Array();
var positionY = new Array();
var positionXP = new Array();
var positionYP = new Array();
var x = aleatorio(0, 420)
var y = aleatorio(0, 420)


var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);   

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo(){
    fondo.cargaOK = true;
    papel.drawImage(fondo.imagen, 0, 0);
}

function cargarPollos(){
    pollo.cargaOK = true;
    for(let i=0;i<cantidad;i++){
        let a = aleatorio(0, 10)*60
        let b = aleatorio(0, 10)*60
        papel.drawImage(pollo.imagen, a, b);
        positionXP.push(a); 
        positionYP.push(b);  
    }
}

function cargarVacas(){
    vaca.cargaOK = true;
    for(let i=0;i<cantidad;i++){
        let a = aleatorio(0, 10)*60
        let b = aleatorio(0, 10)*60
        papel.drawImage(vaca.imagen, a, b);
        positionX.push(a); 
        positionY.push(b);  
    }
}

function cargarCerdos(){
    cerdo.cargaOK = true;
    dibujar();
}


function dibujar(){
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){
        for(let i=0;i<positionX.length; i++){
            papel.drawImage(vaca.imagen, positionX[i], positionY[i]);
        }  
    }
    if(pollo.cargaOK){
        for(let i=0;i<positionXP.length; i++){
            papel.drawImage(pollo.imagen, positionXP[i], positionYP[i]);
        }
    }
    if(cerdo.cargaOK){
        papel.drawImage(cerdo.imagen, x, y);
    }

}


function moverCerdo(evento){
    console.log(evento)

    var movimiento = 10; 
    switch(evento.keyCode){
        case teclas.UP:
            dibujar();
            y = y - movimiento;
        break;
        case teclas.DOWN:
           dibujar();
            y = y + movimiento;
        break;
        case teclas.RIGHT:
            dibujar();
            x = x + movimiento;
        break;
        case teclas.LEFT:
            dibujar();
            x = x - movimiento;
        break;
        default:
            console.log("Otra tecla");
    }
}

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

