/*
// elemento = document.getElementById('paragrafo');
elemento = document.querySelector('#paragrafo span')

// texto = "O filme \\ \"Star Wars\"";

// elemento.innerHTML = '<a href="#">Waldir</a>';
// elemento.innerText = '<a href="#">Waldir</a>';
// console.log(elemento.innerText);

function helloWorld() {
    el = document.querySelector('button');
    // el.innerHTML = 'Clicado';
    el.style.backgroundColor = 'blue';
}

el = document.querySelector('button');

// el.onclick = () => {
//     el.style.backgroundColor = 'blue';
// }

function toggleButton(){
    el = document.querySelector('button');
    if(el.innerText === 'Clique aqui!!'){
        el.innerText = 'Clicado';
    } else {
        el.innerText = 'Clique aqui!!';
    }
}

if(2 < 5) {
    let n = 19;
}

console.log(n);

*/

let numeros = [4, 3, 5, 6, 8, 6, 10, 12]; // 18
//  dobro =   [8, 6, 10, 12]
// console.log(numeros);
// numeros.push(27);
// console.log(numeros);
// numeros.pop()
// console.log(numeros);
// numeros.unshift(10);
// console.log(numeros);

let dobro = [];
numeros.forEach(
    (num) => {
        dobro.push(num * 2);
        // console.log(num);
    }
);

let soma = 0;
numeros.forEach(
    (num) => {
        soma += num;
    }
);

let below8 = [];
numeros.forEach(
    (num) => {
        if (num < 8){
            below8.push(num);
        }
    }
);

let above8 = numeros.filter(
    (num) => {
        return num > 8;
    }
);

let pairNumbers = numeros.filter(
    (num) => {
        return num % 2 === 0;
    }
);

let pairIndexes = numeros.filter(
    (num, ind) => {
        return ind % 2 === 0;
    }
);

// new_arr = numeros.concat(above8);

// console.log(pairIndexes);

// box = document.querySelectorAll('.box');

// console.log(box[1].style.backgroundColor);

// const baseUrl = 'https://swapi.co/api/';

// let resp = fetch(`${baseUrl}people/1`);
// resp.then(
//     (response) => {
//         console.log(response);
//     },
//     () => {
//         console.log('fodeu');
//     }
// )

// document.createElement()

let demo = document.getElementById('demo');

let newObj = document.createElement('p');
newObj.innerText = 'papie';
let link = document.createElement('a').href = 'https://www.google.com';
newObj.appendChild(link);

demo.appendChild(newObj);