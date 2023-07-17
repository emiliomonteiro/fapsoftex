var dataAtual = new Date();

const data = {
  dia: 1,
  mes: 10,
  ano: 2022,
};

//alteracao dos valores de atributo dentro de objeto
data.dia = 27;
data.mes = 12;

console.log(`A data do programa é: ${data.dia}/${data.mes}/${data.ano}`);
console.log(`A data atual correta é: ${dataAtual.toLocaleDateString()}`);
