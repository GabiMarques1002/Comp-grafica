// Script para alternar entre as telas
document.querySelector('#botao-login').addEventListener('click', () => {
  document.getElementById('login').classList.add('oculta');
  document.getElementById('inicio').classList.remove('oculta');
});

// Variáveis para controlar as respostas corretas
let respostaCorreta = '';

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
  
  // Resposta correta: B) 8
  respostaCorreta = 'B';
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
  
  // Resposta correta: A) Cães
  respostaCorreta = 'A';
});

// Sistema de correção das respostas
document.querySelectorAll('.opcoes button').forEach(button => {
  button.addEventListener('click', function() {
    const letraSelecionada = this.textContent.charAt(0); // Pega a letra (A, B, C, D)
    
    // Remove qualquer estilo anterior
    document.querySelectorAll('.opcoes button').forEach(btn => {
      btn.style.backgroundColor = 'white';
      btn.style.color = '#007BFF';
      btn.style.border = '2px solid #007BFF';
    });
    
    // Verifica se acertou
    if (letraSelecionada === respostaCorreta) {
      // Resposta correta - verde
      this.style.backgroundColor = '#28a745';
      this.style.color = 'white';
      this.style.border = '2px solid #28a745';
      setTimeout(() => {
        alert('🎉 Parabéns! Resposta CORRETA!');
      }, 300);
    } else {
      // Resposta errada - vermelho
      this.style.backgroundColor = '#dc3545';
      this.style.color = 'white';
      this.style.border = '2px solid #dc3545';
      
      // Mostra a resposta correta em verde
      document.querySelectorAll('.opcoes button').forEach(btn => {
        if (btn.textContent.charAt(0) === respostaCorreta) {
          btn.style.backgroundColor = '#28a745';
          btn.style.color = 'white';
          btn.style.border = '2px solid #28a745';
        }
      });
      
      setTimeout(() => {
        alert('❌ Resposta INCORRETA! Tente novamente.');
      }, 300);
    }
  });
});

// Botão Voltar - volta para a tela inicial
document.querySelector('#voltar').addEventListener('click', () => {
  document.getElementById('exercicio').classList.add('oculta');
  document.getElementById('inicio').classList.remove('oculta');
  
  // Reseta as cores dos botões quando voltar
  document.querySelectorAll('.opcoes button').forEach(btn => {
    btn.style.backgroundColor = 'white';
    btn.style.color = '#007BFF';
    btn.style.border = '2px solid #007BFF';
  });
});

// Próxima questão - muda para uma nova pergunta da mesma matéria
document.querySelector('#proximo').addEventListener('click', () => {
  const titulo = document.getElementById('titulo-exercicio').textContent;
  
  // Reseta as cores dos botões
  document.querySelectorAll('.opcoes button').forEach(btn => {
    btn.style.backgroundColor = 'white';
    btn.style.color = '#007BFF';
    btn.style.border = '2px solid #007BFF';
  });
  
  if (titulo.includes('Matemática')) {
    // Nova pergunta de Matemática
    document.getElementById('pergunta-exercicio').textContent = 'Quanto é 12 ÷ 4?';
    const opcoes = document.querySelectorAll('.opcoes button');
    opcoes[0].textContent = 'A) 2';
    opcoes[1].textContent = 'B) 3';
    opcoes[2].textContent = 'C) 4';
    opcoes[3].textContent = 'D) 6';
    
    // Nova resposta correta: B) 3
    respostaCorreta = 'B';
  } else if (titulo.includes('Português')) {
    // Nova pergunta de Português
    document.getElementById('pergunta-exercicio').textContent = 'Qual é o antônimo de "alegre"?';
    const opcoes = document.querySelectorAll('.opcoes button');
    opcoes[0].textContent = 'A) Feliz';
    opcoes[1].textContent = 'B) Triste';
    opcoes[2].textContent = 'C) Content';
    opcoes[3].textContent = 'D) Animado';
    
    // Nova resposta correta: B) Triste
    respostaCorreta = 'B';
  }
  
  alert('Próxima questão carregada!');
});
