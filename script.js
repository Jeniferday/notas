function calcularMedia() {
  var nome = document.getElementById('nome').value;
  var nota1 = parseFloat(document.getElementById('nota1').value);
  var nota2 = parseFloat(document.getElementById('nota2').value);
  var nota3 = parseFloat(document.getElementById('nota3').value);

  var media = (nota1 + nota2 + nota3) / 3;
  var resultado = '';

  if (media >= 5) {
      resultado = 'Aprovado';
  } else {
      resultado = 'Reprovado';
  }

  document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)}`;
  document.getElementById('situacao').innerText = `Aluno ${nome} está ${resultado}`;
}
