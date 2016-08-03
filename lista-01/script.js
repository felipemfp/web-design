'use strict';

var lista1 = (function() {
  var q = [
    function questao01() {
      alert("Alo Mundo");
    },
    function questao02() {
      var numero = parseInt(prompt("Digite um número:"));
      alert("O número informado foi " + numero);
    },
    function questao03() {
      var numero1 = parseInt(prompt("Digite um número:"));
      var numero2 = parseInt(prompt("Digite outro número:"));
      alert("O resultado é: " + numero1 + "+" + numero2 + "=" + (numero1 + numero2));
    },
    function questao04() {
      var n1 = parseFloat(prompt("Digite a 1° nota:"));
      var n2 = parseFloat(prompt("Digite a 2° nota:"));
      var n3 = parseFloat(prompt("Digite a 3° nota:"));
      var n4 = parseFloat(prompt("Digite a 4° nota:"));

      var media = (n1 * 2 + n2 * 2 + n3 * 3 + n4 * 4) / 10;

      alert("A média é: " + media);
    },
    function questao05() {
      var m = parseFloat(prompt("Digite uma medida em metros:"));
      var cm = m * 100;

      alert(m + "m equivale à " + cm + "cm");
    },
    function questao06() {
      var raio = parseFloat(prompt("Digite o raio do círculo:"));
      var area = Math.PI * raio * raio;
      alert("A área do círculo é: " + area);
    },
    function questao07() {
      var lado = parseFloat(prompt("Digite o lado do quadrado:"));
      var area = lado * lado;
      var dobro = 2 * area;
      alert("O dobro da área do quadrado é: " + dobro);
    },
    function questao08() {
      var hora = parseFloat(prompt("Digite quanto você ganha por hora:"));
      var valor = parseFloat(prompt("Digite quantas horas você trabalha por mês:"));
      var salario = hora * valor;
      alert("Seu salário é R$ " + salario);
    },
    function questao09() {
      var f = parseFloat(prompt("Digite uma temperatura em Fahrenheit:"));
      var c = (5 * (f - 32) / 9);
      alert("A temperatura em Celsius é: " + c);
    },
    function questao10() {
      var c = parseFloat(prompt("Digite uma temperatura em Celsius:"));
      var f = c * 9 / 5 + 32;
      alert("A temperatura em Fahrenheit é: " + f);
    },
    function questao11() {
      var n1 = parseInt(prompt("Digite o 1° número inteiro:"));
      var n2 = parseInt(prompt("Digite o 2° número inteiro:"));
      var n3 = parseInt(prompt("Digite um número real:"));

      var caso_1 = (2 * n1) * (n2 / 2);
      var caso_2 = (3 * n1) + n3;
      var caso_3 = n3 * n3 * n3;

      alert("Os casos são: " + caso_1 + ", " + caso_2 + " e " + caso_3);
    },
    function questao12() {
      var altura = parseFloat(prompt("Digite a altura de uma pessoa:"));
      var peso = 72.8 * altura - 58;
      alert("O seu peso ideal é: " + peso);
    },
    function questao13() {
      var excesso = 0.0;
      var multa = 0.0;
      var peso = parseFloat(prompt("Digite o peso dos peixes que você pescou hoje:"));

      if (peso > 50) {
        excesso = peso - 50;
        multa = excesso * 4.0;
      }

      alert("O excesso e o valor da multa são: " + excesso + ", " + multa);
    },
    function questao14() {
      var hora = parseFloat(prompt("Digite quanto você ganha por hora:"));
      var valor = parseFloat(prompt("Digite quantas horas você trabalha por mês:"));

      var bruto = hora * valor;
      var renda = bruto * 0.11;
      var inss = bruto * 0.08;
      var sindicato = bruto * 0.05;

      alert("+ Salário Bruto : R$ " + bruto +
        "\n" + "- IR (11%) : R$ " + renda +
        "\n" + "- INSS (8%) : R$ " + inss +
        "\n" + "- Sindicato (5%) : R$ " + sindicato +
        "\n" + "= Salário Liquido : R$ " + (bruto - renda - inss - sindicato));
    },
    function questao15() {
      var area = parseFloat(prompt("Digite a área a ser pintada:"));

      var latas = area / (18 * 3);
      var preco = latas * 80;
      if (latas % 1 > 0) {
        latas = parseInt(latas) + 1;
        preco = latas * 80;
      }

      alert("Você terá que comprar " + latas + " lata(s) e isso custará R$ " + preco);
    },
    function questao16() {
      var area = parseFloat(prompt("Digite a área a ser pintada:"));

      // Caso 1

      var latas_1 = area / (18 * 6);
      var preco_1 = latas_1 * 80;
      if (latas_1 % 1 > 0) {
        latas_1 = parseInt(latas_1) + 1;
        preco_1 = latas_1 * 80;
      }

      // Caso 2

      var galao_2 = area / (3.6 * 6);
      var preco_2 = galao_2 * 25;
      if (galao_2 % 1 > 0) {
        galao_2 = parseInt(galao_2) + 1;
        preco_2 = galao_2 * 25;
      }

      // Caso 3

      var area_3 = area * 1.1;

      var latas_3 = area / (18 * 6);
      var galao_3 = 0;
      if (latas_3 % 1 > 0) {
        var resto = (latas_3 - parseInt(latas_3)) * 18 * 6;
        latas_3 = parseInt(latas_3);
        if (resto <= (3.6 * 6 * 3)) {
          galao_3 = Math.ceil(resto / (3.6 * 6));
        } else {
          latas_3 = Math.ceil(latas_3);
        }
      }
      var preco_3 = latas_3 * 80 + galao_3 * 25;

      alert("Casos das Vendas: " +
        "\n" +
        "\n" + "Caso 1:" +
        "\n" + "Área (m²) = " + area +
        "\n" + "Latas = " + latas_1 +
        "\n" + "Preço = " + preco_1 +
        "\n" +
        "\n" + "Caso 2:" +
        "\n" + "Área (m²) = " + area +
        "\n" + "Galões = " + galao_2 +
        "\n" + "Preço = " + preco_2 +
        "\n" +
        "\n" + "Caso 3:" +
        "\n" + "Área (m²) = " + area_3 +
        "\n" + "Latas = " + latas_3 +
        "\n" + "Galões = " + galao_3 +
        "\n" + "Preço = " + preco_3);
    },
    function questao17() {
      var arquivo = parseFloat(prompt("Digite o tamanho do arquivo em MB:"));
      var velocidade = parseFloat(prompt("Digite a velocidade da sua internet em Mbps:"));

      var segundos = arquivo / velocidade;
      var minutos = segundos / 60;

      alert("O tempo aproximado em minutos para concluir o download é: " + Math.round(minutos));
    },

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

lista1.init();
