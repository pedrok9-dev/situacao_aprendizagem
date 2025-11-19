const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

let res = document.getElementById('res')

let arr = [7, 14, 2, 19, 11, 4, 16, 1, 9, 6, 18, 3, 12, 20, 5, 17, 8, 13, 10, 15]
let val = 0

res.innerHTML = ` `

function ordenarCres(){
    for( let j = 0; j < arr.length - 1; j++){
        for(let i = 0; i < arr.length - j - 1; i++){
            if(arr[i] > arr[i+1]){
                val = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = val
            }
        }
    }

    res.innerHTML += `ordem crescente: ${arr} <br>`

}

function ordenarDesc(){
    for( let j = 0; j < arr.length - 1; j++){
        for(let i = 0; i < arr.length - j - 1; i++){
            if(arr[i] < arr[i+1]){
                val = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = val
            }
        }
    }

    res.innerHTML += `ordem decrescente: ${arr} <br>`

}

let res2 = document.getElementById('res2')
let arrAleat = []
let val2 = 0

res2.innerHTML = ` `

function numAleat(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function ordenarAleat(){

    for(let i = 0; i < 10; i++){
        arrAleat[i] = numAleat(1,20)
    }

    let arrOriginal = [...arrAleat]

    for( let j = 0; j < arrAleat.length - 1; j++){
        for(let i = 0; i < arrAleat.length - j - 1; i++){
            if(arrAleat[i] > arrAleat[i+1]){
                val2 = arrAleat[i]
                arrAleat[i] = arrAleat[i+1]
                arrAleat[i+1] = val2
            }
        }
    }

    res2.innerHTML += `Ordem errada: ${arrOriginal}<br>`
    res2.innerHTML += `Ordem certa: ${arrAleat}`
}

let res3 = document.getElementById('res3')

let soma = 0
let num = []

res3.innerHTML = ` `

function numAleat220(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function somar220(){
    for(let i = 0; i < 10; i++){
        num[i] = numAleat220(1,220)
        soma += num[i]
    }

    res3.innerHTML += `Os números sorteados foram: ${num}<br>`
    res3.innerHTML += `A soma total foi: ${soma}`
}