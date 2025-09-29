// Script para alternar entre as telas
document.querySelector('#botao-login').addEventListener('click', () => {
  document.getElementById('login').classList.add('oculta');
  document.getElementById('inicio').classList.remove('oculta');
});

// Navegação para Matemática
document.querySelector('#botao-matematica').addEventListener('click', () => {
  document.getElementById('inicio').classList.add('oculta');
  document.getElementById('exercicio').classList.remove('oculta');
  document.getElementById('titulo-exercicio').textContent = 'Exercício: Matemática';
  document.getElementById('pergunta-exercicio').textContent = 'Qual é o resultado de 5 + 3?';
});

// Navegação para Português
document.querySelector('#botao-portugues').addEventListener('click', () => {
  document.getElementById('inicio').classList.add('oculta');
  document.getElementById('exercicio').classList.remove('oculta');
  document.getElementById('titulo-exercicio').textContent = 'Exercício: Português';
  document.getElementById('pergunta-exercicio').textContent = 'Qual é o plural da palavra "cão"?';
});

// Próxima questão
document.querySelector('#proximo').addEventListener('click', () => {
  alert('Próxima questão carregada!');
});
