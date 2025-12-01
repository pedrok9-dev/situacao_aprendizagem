const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

let res = document.getElementById('res')

let arr = [7, 14, 2, 19, 11, 4, 16, 1, 9, 6, 18, 3, 12, 20, 5, 17, 8, 13, 10, 15]
let val = 0


function ordenarCres() {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                val = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = val
            }
        }
    }

    res.innerHTML = ` `
    res.innerHTML += `ordem crescente: ${arr} <br>`

}

function ordenarDesc() {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                val = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = val
            }
        }
    }

    res.innerHTML = ` `
    res.innerHTML += `ordem decrescente: ${arr} <br>`

}

let res2 = document.getElementById('res2')
let arrAleat = []
let val2 = 0



function numAleat(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function ordenarAleat() {

    for (let i = 0; i < 10; i++) {
        arrAleat[i] = numAleat(1, 20)
    }

    let arrOriginal = [...arrAleat]

    for (let j = 0; j < arrAleat.length - 1; j++) {
        for (let i = 0; i < arrAleat.length - j - 1; i++) {
            if (arrAleat[i] > arrAleat[i + 1]) {
                val2 = arrAleat[i]
                arrAleat[i] = arrAleat[i + 1]
                arrAleat[i + 1] = val2
            }
        }
    }

    res2.innerHTML = ` `
    res2.innerHTML += `Ordem errada: ${arrOriginal}<br>`
    res2.innerHTML += `Ordem certa: ${arrAleat}`
}

let res3 = document.getElementById('res3')

let soma = 0
let num = []


function numAleat220(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function somar220() {
    for (let i = 0; i < 10; i++) {
        num[i] = numAleat220(1, 220)
        soma += num[i]
    }

    res3.innerHTML = ` `
    res3.innerHTML += `Os números sorteados foram: ${num}<br>`
    res3.innerHTML += `A soma total foi: ${soma}`
}

let res4 = document.getElementById('res4')

let mat = []


function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function matriz() {
    let n = 3, min = 1, max = 20

    for (let i = 0; i < n; i++) {
        mat[i] = []
        for (let j = 0; j < n; j++) {
            mat[i][j] = gerarAleatorio(min, max)
        }
    }
    let texto = "A matriz gerada foi:<br>"
    for (let i = 0; i < mat.length; i++) {
        texto += `[ ${mat[i].join(", ")} ]<br>`
    }
    res4.innerHTML = ` `
    res4.innerHTML += texto
}

let res5 = document.getElementById('res5')

function IMC(){
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let imc = 0


    imc = peso / (altura * altura)
    res5.innerHTML = ` `
    res5.innerHTML += `Seu imc é de: ${imc.toFixed(2)}<br>`

    if(imc <= 18.5){
        res5.innerHTML += `Magreza`
    }else if(imc > 18.5 && imc <= 24.9){
        res5.innerHTML += `Peso normal`
    }else if(imc >= 25 && imc <= 29.9){
        res5.innerHTML += `Sobrepeso`
    }else if(imc >= 30 && imc <= 39.9){
        res5.innerHTML += `Obesidade`
    }else if(imc >= 40){
        res5.innerHTML += `Obesidade grave`
    }
}

let res6 = document.getElementById('res6')

function ConvParaCelsius(F){       //essa função é para converter de farenheit para celsius
    return (F - 32) * (5/9)
}

function ConvParaFarenheit(C){  //já essa função é para converter de celsius para farenheit
    return (C * (9/5)) + 32
}

function converter(){
    let temp = document.getElementById('temp').value
    let C = Number(document.getElementById('C').value)
    let F = Number(document.getElementById('F').value)
    let tempFinal = 0.0

    res6.innerHTML = ` `

    switch(temp){
        case 'C':
        tempFinal = ConvParaCelsius(F)
        res6.innerHTML += `A temperatura em celsius é de: ${tempFinal.toFixed(2)} Graus`
        break
        case 'c':
        tempFinal = ConvParaCelsius(F)
        res6.innerHTML += `A temperatura em celsius é de: ${tempFinal.toFixed(2)} Graus`
        break
        case 'F':
        tempFinal = ConvParaFarenheit(C)
        res6.innerHTML += `A temperatura em Farenheit é de: ${tempFinal.toFixed(2)} Graus`
        break
        case 'f':
        tempFinal = ConvParaFarenheit(C)
        res6.innerHTML += `A temperatura em Farenheit é de: ${tempFinal.toFixed(2)} Graus`
        break
        default:
        res6.innerHTML += `Letra inválida!! Digite novamente!`
    }
}

let res7 = document.getElementById('res7')

function buscaLinear(vetor, valor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === valor) {
            return i; // achou
        }
    }
    return -1; // não achou
}

function buscar() {
    let texto = document.getElementById("vetor").value;
    let valor = Number(document.getElementById("valor").value);
    res7.innerHTML = ` `

    let vetor = texto.split(",").map(n => Number(n.trim()));

    let pos = buscaLinear(vetor, valor);

    if (pos !== -1) {
        res7.innerHTML = `Valor encontrado na posição ${pos + 1}.`;
    } else {
        res7.innerHTML = "Valor não encontrado.";
    }
}

let res8 = document.getElementById('res8')

function tensao(){
    let corren = Number(document.getElementById('corren').value);
    let resis = Number(document.getElementById('resis').value);
    let tensao = 0
    
    res8.innerHTML = ` `

    tensao = corren * resis

    res8.innerHTML += `A tensão é de ${tensao}V`
}

let res9 = document.getElementById('res9')

function resis(){
    let corren2 = Number(document.getElementById('corren2').value);
    let tens2 = Number(document.getElementById('tens2').value);
    let resi = tens2 / corren2    
    res9.innerHTML = ` `

    res9.innerHTML += `A Resitência é de ${resi.toFixed(2)} Ohms` 
}

let res11 = document.getElementById('res11')

function coren(){
    let resis3 = Number(document.getElementById('resis3').value);
    let tens3 = Number(document.getElementById('tens3').value);
    let coren = tens3 / resis3    
    res11.innerHTML = ` `

    res11.innerHTML += `A Corrente é de ${coren.toFixed(2)}A`  
}

function poten(){
    let coren4 = Number(document.getElementById('coren4').value);
    let tens4 = Number(document.getElementById('tens4').value);
    let poten = tens4 / coren4    
    res11.innerHTML = ` `

    res11.innerHTML += `A Potência é de ${poten.toFixed(2)}W`  
}