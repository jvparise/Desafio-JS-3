const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500.0) {
    return 10;
  } else {
    return 15;
  }
}
const aliquotaImposto = pegarAliquota(valorSalario);

const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir.toFixed(2));
