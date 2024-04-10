var animation = bodymovin.loadAnimation({
    container: document.getElementById('miVideo'),
    rederer: 'svg',
    loop: true,
    autoplay: false,
    path:'./script/estadisticas.json'
})
// para tener un delay se tiene que colocar autoplay false y colocar el siguiente codigo
setTimeout(function(){ animation.play(); }, 1700);