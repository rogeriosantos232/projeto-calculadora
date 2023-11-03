//Exercicio das aulas 70,71,72 e 73

const teclasNum = [...document.querySelectorAll(".num")]


const teclasOp = [...document.querySelectorAll(".op")]

const teclaRes = document.querySelector(".res")

const mostrador = document.querySelector(".mostrador")
const tDel = document.querySelector("#tDel")
const tIgual = document.querySelector("#tIgual")
const tCopy = document.querySelector("#tCopy")

let sinal = false
let decimal = false


teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if (evt.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
                if (mostrador.innerHTML == "0") {
                    mostrador.innerHTML="0,"
                } else { mostrador.innerHTML += evt.target.innerHTML }
            }
        } else {
            if (mostrador.innerHTML == "0") {
                mostrador.innerHTML = ""
            }
            mostrador.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
            if (mostrador.innerHTML == "0") {
                mostrador.innerHTML = ""
            }
            if (evt.target.innerHTML == "*") {
                mostrador.innerHTML += "*"
            } else {
                mostrador.innerHTML += el.innerHTML
            }
        }

    })
})

tDel.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    mostrador.innerHTML = "0"
})
tIgual.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    const aaa = eval(mostrador.innerHTML)
    mostrador.innerHTML = aaa
})

tCopy.addEventListener("click",(evt)=>{
    teste.select()
    teste.setSelectionRange(0,999999)//Mobile
    navigator.clipboard.writeText(mostrador.innerHTML)
})