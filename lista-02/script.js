'use strict';

var lista2 = (function() {
  var q = [
    function questao1() {
      var x = parseInt(prompt('Qual é o número:'));
      var y = parseInt(prompt('Diga o número para comparar:'));
      alert('O maior é: ' + (x > y ? x : y));
    },
    function questao2() {
      var x = parseInt(prompt('Põe um número aí:'));
      if (x >= 0) {
        alert('Parece que esse valor é positivo (pelo menos é certeza que não é negativo).');
      } else {
        alert('Negativo! Certeza absoluta.');
      }
    },
    function questao3() {
      var l = prompt('Diga a representação de um sexo com uma letra:');
      if (l.toUpperCase() === 'F') {
        alert('Feminino, ué!');
      } else if (l.toUpperCase() === 'M') {
        alert('Masculino, oxê!');
      } else {
        alert('INVÁLIDO! Conheço esse não, visse!');
      }
    },
    function questao4() {
      var l = prompt('Diga uma letra aí:').toUpperCase();
      if (l === 'A' || l === 'E' || l === 'I' || l === 'O' || l === 'U') {
        alert('Claramente uma vogal!');
      } else if (l.replace(/[^A-Z]/g, '').length === 1) {
        alert('Vogal não é, só pode ser consoante!');
      } else {
        alert('Tu colocou outra coisa ali.');
      }
    },
    function questao5() {
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
    function questao6() {
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
    function questao7() {
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
    function questao8() {
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
    function questao9() {
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
    function questao10() {
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
    },
    function questao11() {
      var s = parseFloat(prompt('Qualé o salário?'));
      var a = 5.0;

      if (s <= 280) {
        a = 20.0;
      } else if (s < 700) {
        a = 15.0;
      } else if (s < 1500) {
        a = 10.0;
      }

      alert(
        'Antes do aumento, o salário era: R$ ' + s +
        '\nEntão ganhou um aumento de: ' + a + '%' +
        '\nOu seja: R$ ' + (s * (a / 100)) +
        '\nSendo assim, o novo salário é: R$ ' + (s + s * (a / 100))
      );
    },
    function questao12() {
      var h = parseFloat(prompt('Parceiro, quanto vale tua hora hoje?'));
      var d = parseInt(prompt('Quantas horas por mês tu trabalha?'));
      var b = h * d;
      var ir = b <= 900 ? 0 : b <= 1500 ? 5 : b <= 2500 ? 10 : 20;
      var inss = 10;
      var fgts = 11;
      var r = 'Salário Bruto: (' + h + ') * (' + d + '): R$ ' + Math.round(b, 2);
      var ir_d = Math.round(b * (ir / 100), 2);
      r += '\n(-) IR (' + ir + '%): R$ ' + ir_d;
      var l = b - ir_d
      var inss_d = Math.round(b * (inss / 100), 2);
      r += '\n(-) INSS (10%): R$ ' + inss_d;
      l -= inss_d;
      r += '\nFGTS (11%): R$ ' + Math.round(b * (fgts / 1000), 2);
      r += '\nTotal de Descontos: R$ ' + (ir_d + inss_d);
      r += '\nSalário Líquido: R$ ' + l;
      alert(r);
    },
    function questao13() {
      var o = parseInt(prompt('Digaí um número que eu digo o dia da semana'));
      if (1 <= o && o <= 7) {
        var d = [
          'Domingo', 'Segunda', 'Terça',
          'Quarta', 'Quinta', 'Sexta', 'Sábado'
        ];
        alert('Fácil, fácil: ' + d[o - 1]);
      } else {
        alert('INVÁLIDO! Se não quer brincar, não brinca.');
      }
    },
    function questao14() {
      var n1 = parseFloat(prompt('Diz a primeira nota:'));
      var n2 = parseFloat(prompt('Diz a segunda nota:'));
      var m = (n1 + n2) / 2;
      var c = 'E';
      if (m < 4) {
        c = 'E'
      } else if (m < 6) {
        c = 'D'
      } else if (m < 7.5) {
        c = 'C'
      } else if (m < 9) {
        c = 'B'
      } else {
        c = 'A'
      }
      switch (c) {
        case 'A':
        case 'B':
        case 'C':
          alert('Tá aprovado, rapá!');
          break;
        default:
          alert('Deu ruim para tu, tás reprovado.')
      }
    },
    function questao15() {
      var l = [];
      alert('Vou pedir três lados de um triângulo, viu?');
      for (var i = 0; i < 3; i++) {
        l[i] = parseFloat(prompt('Digite aí um lado do triângulo'));
      }
      if (l[0] < l[1] + l[2] && l[2] < l[1] + l[0] && l[1] < l[0] + l[2]) {
        if (l[0] === l[1] && l[2] === l[1]) {
          alert('Esse bagulho dá um equilátero!');
        } else if (l[0] === l[1] || l[2] === l[1] || l[0] === l[2]) {
          alert('Aposto num isósceles!');
        } else {
          alert('Escaleno neles!');
        }
      } else {
        alert('Dá um triângulo não, visse!');
      }
    },
    function questao16() {
      var a = parseFloat(prompt('Qualé o valor de a:'));
      var b, c, delta, x1, x2;

      if (a == 0) {
        alert('Isso não é uma função do 2º grau');
      } else {
        b = parseFloat(prompt('Qualé o valor de b:'));
        c = parseFloat(prompt('Qualé o valor de c:'));

        delta = (b ** 2) - 4 * a * c;

        if (delta < 0) {
          alert('Tem raíz não, visse!');
        } else if (delta > 0) {
          let p1 = (-1 * b);
          let p2 = (Math.sqrt(delta));
          let p3 = (2 * a);
          x1 = (p1 - p2) / p3;
          x2 = (p1 + p2) / p3;
          alert('Encontrei duas raízes: ' + x1 + ' e ' + x2);
        } else {
          x1 = (-1 * b) / (2 * a);
          alert('Só achei essa raíz para a equação: ' + x1);
        }
      }
    },
    function questao17() {
      var y = parseInt(prompt('Rápido, um ano:'));
      if (y % 4 == 0) {
        alert('BISSEXTO! :D');
      } else {
        alert('Só mais um ano qualquer que não é bissexto.');
      }
    },
    function questao18() {
      var c = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var din = prompt('Que dia, rapá?').split('/');
      var d = parseInt(din[0]),
        m = parseInt(din[1]),
        y = parseInt(din[2]);

      if (1 <= m && m <= 12 && 0 < d && typeof y === 'number') {
        if (c[m - 1] >= d || (y % 4 === 0 && m === 2 && d === 29)) {
          alert('É uma data de verdade, ahoy!');
          return;
        }
      }

      alert('Não parece uma data para mim!');
    },
    function questao19() {
      var n = parseInt(prompt('Um número menor que 1000:'));
      var c = Math.floor(n / 100);
      var d = Math.floor(n % 100 / 10);
      var u = n % 10;
      var r = '';
      if (c > 0) {
        r += c + ' centena' + (c > 1 ? 's' : '');
      }
      if (d > 0) {
        if (r != '') {
          r += ', ';
        }
        r += d + ' dezena' + (d > 1 ? 's' : '');
      }
      if (u > 0) {
        if (r != '') {
          r += ' e '
        }
        r += u + ' unidade' + (u > 1 ? 's' : '');
      }
      alert('Isso dá mais ou menos: ' + r);
    },
    function questao20() {
      var n = 0;
      for (var i = 0; i < 3; i++) {
        n += parseFloat(prompt('Diga a nota #' + (i + 1)));
      }
      var m = n / 3;
      if (m < 7) {
        alert('Reprovado, visse.');
      } else if (m < 10) {
        alert('Aprovado, cumpadre!');
      } else {
        alert('Mas que bixinho! Aprovado com distinção.')
      }
    },
    function questao21() {
      var x = parseInt(prompt('Quanto tu quer sacar, mano?'));
      var d = [100, 50, 10, 5, 1];
      var r = 'Vou te dar:\n\n';
      d.forEach(function(m) {
        if (x >= m) {
          let n = Math.floor(x / m)
          x = x - (n * m)
          r += n + ' nota(s) de R$ ' + m + '\n';
        }
      });
      alert(r.trim());
    },
    function questao22() {
      var x = parseInt(prompt('Diz um número:'));
      alert(x % 2 == 0 ? 'Parece um par!' : 'Ímpar, na certa.');
    },
    function questao23() {
      var x = parseFloat(prompt('Diz um número:'));
      alert(Math.round(x, 0) == x ? 'Parece um inteiro!' : 'Claramente um decimal.');
    },
    function questao24() {
      var n1 = parseFloat(prompt('Primeiro, o número n1:'));
      var n2 = parseFloat(prompt('Agora o n2:'));
      var op = prompt('Por último, qual a operação? (+, -, *, /):').replace(/[^\+\*\/\-]/g, '');
      var r = 'O resultado é: ';
      var n;
      if (op === '+') {
        n = n1 + n2;
      } else if (op === '-') {
        n = n1 - n2;
      } else if (op === '*') {
        n = n1 * n2;
      } else if (op === '/') {
        n = n1 / n2;
      }
      r += n;
      r += '\nE posso dizer que é ';
      if (n % 2 == 0) {
        r += 'par';
      } else {
        r += 'ímpar';
      }
      r += ', ';
      if (n >= 0) {
        r += 'positivo';
      } else {
        r += 'negativo';
      }
      r += ' e ';
      if (Math.round(n) == n) {
        r += 'inteiro!';
      } else {
        r += 'decimal!';
      }
      alert(r);
    },
    function questao25() {
      var q = [
        'Telefonou para vítima?',
        'Esteve no local do crime?',
        'Mora perto da vítima?',
        'Devia para a vítima?',
        'Já trabalhou com a vítima?'
      ];
      var y = 0;
      alert('Sente-se, vamos conversar!');
      for (var i = 0; i < q.length; i++) {
        if (confirm(q[i])) {
          y += 1;
        }
      }
      if (y < 2) {
        alert('Tudo bem, você parece inocente!');
      } else if (y < 3) {
        alert('Um pouco suspeito. Não saia da cidade, por favor.');
      } else if (y <= 4) {
        alert('Você é o cúmplice! Onde está seu parceiro?');
      } else {
        alert('SEU ASSASSINO! :O');
      }
    },
    function questao26() {},
    function questao27() {},
    function questao28() {},
  ];

  function init() {
    var els = document.querySelectorAll('ul.questoes li');

    els.forEach(function(el) {
      el.addEventListener('click', function() {
        let ind = parseInt(this.innerText.replace(/\D/g, '')) - 1;
        q[ind]();
      });
    });
  }

  return {
    init: init
  }
})();

lista2.init();
