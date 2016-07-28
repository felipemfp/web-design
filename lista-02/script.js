'use strict';

var lista2 = (function() {
  var q = [
    function q1() {
      var x = parseInt(prompt('Qual é o número:'));
      var y = parseInt(prompt('Diga o número para comparar:'));
      alert('O maior é: ' + (x > y ? x : y));
    },
    function q2() {
      var x = parseInt(prompt('Põe um número aí:'));
      if (x >= 0) {
        alert('Parece que esse valor é positivo (pelo menos é certeza que não é negativo).');
      } else {
        alert('Negativo! Certeza absoluta.');
      }
    },
    function q3() {
      var l = prompt('Diga a representação de um sexo com uma letra:');
      if (l.toUpperCase() === 'F') {
        alert('Feminino, ué!');
      } else if (l.toUpperCase() === 'M') {
        alert('Masculino, oxê!');
      } else {
        alert('INVÁLIDO! Conheço esse não, visse!');
      }
    },
    function q4() {
      var l = prompt('Diga uma letra aí:').toUpperCase();
      if (l === 'A' || l === 'E' || l === 'I' || l === 'O' || l === 'U') {
        alert('Claramente uma vogal!');
      } else if (l.replace(/[^A-Z]/g, '').length === 1) {
        alert('Vogal não é, só pode ser consoante!');
      } else {
        alert('Tu colocou outra coisa ali.');
      }
    },
    function q5() {
      var n1 = parseFloat(prompt('Diga a primeira nota:'));
      var n2 = parseFloat(prompt('Diga a segunda:'));
      var m = ((n1 * 2) + (n2 * 3)) / 5;
      if (m == 10) {
        alert('No teu boletim vai ter: "Aprovado com Distinção"!');
      } else if (m >= 7) {
        alert('No teu boletim vai ter: "Aprovado"!');
      } else {
        alert('No teu boletim vai ter: "Reprovado"!');
      }
    },
    function q6() {
      var n = [];
      for (var i = 0; i < 3; i++) {
        n[i] = parseInt(prompt('Coloca algum número aí:'));
      }
      var x = n[0];
      if (n[0] >= n[1] && n[0] >= n[2]) {
        x = n[0];
      } else if (n[1] >= n[2]) {
        x = n[1];
      } else {
        x = n[2];
      }
      alert('O maiorzão é: ' + x);
    },
    function q7() {
      var n = [];
      for (var i = 0; i < 3; i++) {
        n[i] = parseInt(prompt('Coloca algum número aí:'));
      }
      var x = n[0];
      var y = n[0];
      if (n[0] >= n[1] && n[0] >= n[2]) {
        x = n[0];
        y = n[1] <= n[2] ? n[1] : n[2];
      } else if (n[1] >= n[2]) {
        x = n[1];
        y = n[0] <= n[2] ? n[0] : n[2];
      } else {
        x = n[2];
        y = n[0] <= n[1] ? n[0] : n[1];
      }
      alert('O maiorzão é: ' + x + '\nO menor mesmo é: ' + y);
    },
    function q8() {
      var n = [];
      for (var i = 0; i < 3; i++) {
        n[i] = parseInt(prompt('Coloca o preço do produto #' + (i + 1) + ' aí:'));
      }
      var x = 0;
      if (n[0] <= n[1] && n[0] <= n[2]) {
        x = 1;
      } else if (n[1] <= n[2]) {
        x = 2;
      } else {
        x = 3;
      }
      alert('Compre o mais barato, ou seja: produto #' + x);
    },
    function q9() {
      var n = [];
      for (var i = 0; i < 3; i++) {
        n[i] = parseInt(prompt('Coloca algum número aí:'));
      }
      var o = [];
      if (n[0] >= n[1] && n[0] >= n[2]) {
        o.push(n[0]);
        if (n[1] >= n[2]) {
          o.push(n[1]);
          o.push(n[2]);
        } else {
          o.push(n[2]);
          o.push(n[1]);
        }
      } else if (n[1] >= n[2]) {
        o.push(n[1]);
        if (n[0] >= n[2]) {
          o.push(n[0]);
          o.push(n[2]);
        } else {
          o.push(n[2]);
          o.push(n[0]);
        }
      } else {
        o.push(n[2]);
        if (n[0] >= n[1]) {
          o.push(n[0]);
          o.push(n[1]);
        } else {
          o.push(n[1]);
          o.push(n[0]);
        }
      }
      alert('Do maior ao menor: ' + o.join(', '));
    },
    function q10() {
      var r = {
        'M': 'Bom dia! zZzZ',
        'V': 'Boa tarde! o/',
        'N': 'Boa noite! ~.~'
      }
      var t = prompt('Tu estuda em que turno, bixo?' +
          '\nM - Matutino\nV - Vespetino\nN - Noturno')
        .toUpperCase()
        .replace(/[^MVN]/g, '');
      if (t.length === 1) {
        alert('Opa! ' + r[t]);
      } else {
        alert('Tá me tirando? VALOR INVÁLIDO.');
      }
    }
  ];

  return {
    questoes: q
  }
})();
