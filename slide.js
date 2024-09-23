var radio = document.querySelector('.manual__btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    nextImg()
}, 10000)

function nextImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}

