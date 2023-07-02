//Custo final de um carro
var custo_de_fabrica = 4000;
var porcetagem_do_distribuidor = 28;
var impostos = 45;

var valor_distribuidor = custo_de_fabrica * porcetagem_do_distribuidor / 100;
var valor_impostos = custo_de_fabrica * impostos / 100;
var valor_total = custo_de_fabrica + valor_distribuidor + valor_impostos;

console.log("O valor total do carro fica de:R$", valor_total);