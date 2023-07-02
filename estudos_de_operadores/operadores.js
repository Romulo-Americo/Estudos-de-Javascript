//Operadores logicos
var a = 45,b = 67;
//Verificar se A é maior que B e B é divisível por 2
console.log(a > b && b % 2 ==0);
//Verificar se B é maior igual A ou B divido por 2 o resultado é 2
console.log(b >= a || b / 2 ==  2 );
//Verificar se A é maior que B e B maior igual a 5
console.log(a > b && b <= 5 );
//Verificar se B é par ou impar usando ternario
resultado = b % 2 == 0? "Par" : "Impar";