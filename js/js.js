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

    if(colorSwitch.checked){//-----------------------------DARKMODE------------------------------
        
        corpo.style = 'background-color: #111;' //Background grey
        titulo.style = 'color: white;' // 'Instagram' white
        contaErrada.style.color = 'white' // 'Não é cwb_kauan?' white
        iphone.src = 'css/images/iphone-preto.png' // Iphone black image
        mode.style = 'color: white;' // 'LIGHTMODE' white
        mode.innerHTML = 'LIGHTMODE' // Writing lightmode
        radio1.style = 'background: url(css/images/sun_30px.png) no-repeat; transition: 0.5s;' // Add sun image and transition
        container2.style = 'border: 1px solid #555;' // Add border dark grey around main container

    }else{//-----------------------------LIGHTMODE------------------------------

        corpo.style = 'background-color: white;' //Background white
        titulo.style = 'color: black;' // 'Instagram' black
        contaErrada.style.color = 'black' // 'Não é cwb_kauan?' black
        iphone.src = 'css/images/iphone-branco.png' // Iphone white image
        mode.style = 'color: black;' // 'DARKMODE' black
        mode.innerHTML = 'DARKMODE' // Writing lightmode
        radio1.style = 'background: url(css/images/moon_symbol_30px.png) no-repeat; transition: 0.5s;' // Add moon image and transition
        container2.style = 'border: 1px solid #DDD;' // Add border light grey around main container
    }
}