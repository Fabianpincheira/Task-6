function alertaBoton(){
    alert('Gracias por visitar nuestra pagina web!');
}

function haceclic(){
    document.getElementById('boton').onclick=alertaBoton;
}

window.onload=haceclic;

