let total = document.getElementById('total');
let contite = document.querySelectorAll('#contite');
let plus = document.querySelectorAll('.fa-plus');
let minus = document.querySelectorAll('.fa-minus');
let pris = document.querySelectorAll('#price')
let heart = document.querySelectorAll('.fa-heart');
let trash = document.querySelectorAll('.fa-trash');
let cardes = document.querySelectorAll('#cardes');
console.log(minus)
console.log(pris)
console.log(plus)
function totalprice() {
    let result = 0;
    for (let i = 0; i < pris.length; i++) {
        result += pris[i].innerHTML * contite[i].innerHTML
    }
    return total.innerHTML = result
}



for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function increment() {
        contite[i].innerHTML++
        totalprice()
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function increment() {
        if (contite[i].innerHTML > 0) {
            contite[i].innerHTML--
            totalprice()
        }

    })
}

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function favoris() {
        if (heart[i].style.color == 'red') {
            heart[i].style.color = "black";
        }
        else {
            heart[i].style.color = "red"
        }
    })


}

for(let i = 0; i <trash.length; i++) {
    trash[i].addEventListener("click", function delet(){
        cardes[i].remove();
        contite[i].innerHTML=0
        totalprice()
    })
}




console.log(plus)
console.log(minus)
