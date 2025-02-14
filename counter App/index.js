/*


let saveEl  =  document.getElementsById("save-el")
let countEl =  document.getElementsById("count-el")
let count = 0

console.log(saveEl)

function increment() {

    count = count + 1
    countEl.innerText = count
}


function save() {

    let countStr = count + " - " 
    saveEl.innerText = saveEl.innerText + countStr

    console.log(count)
}*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - " 
    saveEl.textContent = saveEl.textContent + countStr
    /*let countSet = count + 0*/

    countEl.textContent = 0
    count = 0

}

