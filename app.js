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
  
  // Opções para Matemática
  const opcoes = document.querySelectorAll('.opcoes button');
  opcoes[0].textContent = 'A) 7';
  opcoes[1].textContent = 'B) 8';
  opcoes[2].textContent = 'C) 9';
  opcoes[3].textContent = 'D) 6';
});

// Navegação para Português
document.querySelector('#botao-portugues').addEventListener('click', () => {
  document.getElementById('inicio').classList.add('oculta');
  document.getElementById('exercicio').classList.remove('oculta');
  document.getElementById('titulo-exercicio').textContent = 'Exercício: Português';
  document.getElementById('pergunta-exercicio').textContent = 'Qual é o plural da palavra "cão"?';
  
  // Opções para Português
  const opcoes = document.querySelectorAll('.opcoes button');
  opcoes[0].textContent = 'A) Cães';
  opcoes[1].textContent = 'B) Cãezinhos';
  opcoes[2].textContent = 'C) Cãos';
  opcoes[3].textContent = 'D) Cãs';
});

// Próxima questão - muda para uma nova pergunta da mesma matéria
document.querySelector('#proximo').addEventListener('click', () => {
  const titulo = document.getElementById('titulo-exercicio').textContent;
  
  if (titulo.includes('Matemática')) {
    // Nova pergunta de Matemática
    document.getElementById('pergunta-exercicio').textContent = 'Quanto é 12 ÷ 4?';
    const opcoes = document.querySelectorAll('.opcoes button');
    opcoes[0].textContent = 'A) 2';
    opcoes[1].textContent = 'B) 3';
    opcoes[2].textContent = 'C) 4';
    opcoes[3].textContent = 'D) 6';
  } else if (titulo.includes('Português')) {
    // Nova pergunta de Português
    document.getElementById('pergunta-exercicio').textContent = 'Qual é o antônimo de "alegre"?';
    const opcoes = document.querySelectorAll('.opcoes button');
    opcoes[0].textContent = 'A) Feliz';
    opcoes[1].textContent = 'B) Triste';
    opcoes[2].textContent = 'C) Content';
    opcoes[3].textContent = 'D) Animado';
  }
  
  alert('Próxima questão carregada!');
});
