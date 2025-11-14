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