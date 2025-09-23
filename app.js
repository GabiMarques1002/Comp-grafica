// Script para alternar entre as telas
document.querySelector('#login button').addEventListener('click', () => {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
  });
  
  document.querySelector('#next').addEventListener('click', () => {
    alert('Próxima questão carregada!');
  });
  