let A = prompt('Digite o primeiro número:');
let B = prompt('Digite o segundo número:');
let C = prompt('Digite o terceiro número:');

const maior = (a, b) => {
    return a > b ? a : b;
}

alert('O maior é: ' + maior(A, maior(B, C)));