var colorSwitch = document.getElementById('radio1')
colorSwitch.addEventListener('click', changeColor)

function changeColor(){
    var corpo = document.getElementById('body')
    var titulo = document.getElementsByClassName('title')[0]
    var contaErrada = document.getElementById('linkum')
    var iphone = document.getElementById('iphone')
    var radio1 = document.getElementById('radio1')
    var mode = document.getElementById('radio2')
    var container2 = document.getElementsByClassName('container2')[0]

    if(colorSwitch.checked){
        corpo.style = 'background-color: #111;'
        titulo.style = 'color: white;'
        contaErrada.style.color = 'white'
        iphone.src = 'css/images/iphone-preto.png'
        colorSwitch.style = 'background-color: black;'
        mode.style = 'color: white;'
        mode.innerHTML = 'LIGHTMODE'
        radio1.style = 'background: url(css/images/sun_30px.png) no-repeat; transition: 0.5s;'
        container2.style = 'border: 1px solid #555;'
    }else{
        corpo.style = 'background-color: white;'
        titulo.style = 'color: black;'
        contaErrada.style.color = 'black'
        iphone.src = 'css/images/iphone-branco.png'
        mode.style = 'color: black;'
        mode.innerHTML = 'DARKMODE'
        radio1.style = 'background: url(css/images/moon_symbol_30px.png) no-repeat; transition: 0.5s;'
        container2.style = 'border: 1px solid #DDD;'
    }
}