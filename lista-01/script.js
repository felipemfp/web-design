(function() {
  var questoes = [
    function questao_01() {
      alert("Alo Mundo");
    },
    function questao_02() {
      numero = parseInt(window.prompt("Digite um número:"));
      alert("O número informado foi " + numero);
    },
    function questao_03() {
      numero1 = parseInt(window.prompt("Digite um número:"));
      numero2 = parseInt(window.prompt("Digite outro número:"));
      alert("O resultado é: " + numero1 + "+" + numero2 + "=" + (numero1 + numero2));
    },
    function questao_04() {
      n1 = parseFloat(window.prompt("Digite a 1° nota:"));
      n2 = parseFloat(window.prompt("Digite a 2° nota:"));
      n3 = parseFloat(window.prompt("Digite a 3° nota:"));
      n4 = parseFloat(window.prompt("Digite a 4° nota:"));

      media = (n1 * 2 + n2 * 2 + n3 * 3 + n4 * 4) / 10;

      alert("A média é: " + media);
    },
    function questao_05() {
      m = parseFloat(window.prompt("Digite uma medida em metros:"));
      cm = m * 100;

      alert(m + "m equivale à " + cm + "cm");
    },
    function questao_06() {
      raio = parseFloat(window.prompt("Digite o raio do círculo:"));
      area = Math.PI * raio * raio;
      alert("A área do círculo é: " + area);
    },
    function questao_07() {
      lado = parseFloat(window.prompt("Digite o lado do quadrado:"));
      area = lado * lado;
      dobro = 2 * area;
      alert("O dobro da área do quadrado é: " + dobro);
    },
    function questao_08() {
      hora = parseFloat(window.prompt("Digite quanto você ganha por hora:"));
      valor = parseFloat(window.prompt("Digite quantas horas você trabalha por mês:"));
      salario = hora * valor;
      alert("Seu salário é R$ " + salario);
    },
    function questao_09() {
      f = parseFloat(window.prompt("Digite uma temperatura em Fahrenheit:"));
      c = (5 * (f - 32) / 9);
      alert("A temperatura em Celsius é: " + c);
    },
    function questao_10() {
      c = parseFloat(window.prompt("Digite uma temperatura em Celsius:"));
      f = c * 9 / 5 + 32;
      alert("A temperatura em Fahrenheit é: " + f);
    },
    function questao_11() {
      n1 = parseInt(window.prompt("Digite o 1° número inteiro:"));
      n2 = parseInt(window.prompt("Digite o 2° número inteiro:"));
      n3 = parseInt(window.prompt("Digite um número real:"));

      caso_1 = (2 * n1) * (n2 / 2);
      caso_2 = (3 * n1) + n3;
      caso_3 = n3 * n3 * n3;

      alert("Os casos são: " + caso_1 + ", " + caso_2 + " e " + caso_3);
    },
    function questao_12() {
      altura = parseFloat(window.prompt("Digite a altura de uma pessoa:"));
      peso = 72.8 * altura - 58;
      alert("O seu peso ideal é: " + peso);
    },
    function questao_13() {
      excesso = 0.0;
      multa = 0.0;
      peso = parseFloat(window.prompt("Digite o peso dos peixes que você pescou hoje:"));

      if (peso > 50) {
        excesso = peso - 50;
        multa = excesso * 4.0;
      }

      alert("O excesso e o valor da multa são: " + excesso + ", " + multa);
    },
    function questao_14() {
      hora = parseFloat(window.prompt("Digite quanto você ganha por hora:"));
      valor = parseFloat(window.prompt("Digite quantas horas você trabalha por mês:"));

      bruto = hora * valor;
      renda = bruto * 0.11;
      inss = bruto * 0.08;
      sindicato = bruto * 0.05;

      alert("+ Salário Bruto : R$ " + bruto +
        "\n" + "- IR (11%) : R$ " + renda +
        "\n" + "- INSS (8%) : R$ " + inss +
        "\n" + "- Sindicato (5%) : R$ " + sindicato +
        "\n" + "= Salário Liquido : R$ " + (bruto - renda - inss - sindicato));
    },
    function questao_15() {
      area = parseFloat(window.prompt("Digite a área a ser pintada:"));

      latas = area / (18 * 3);
      preco = latas * 80;
      if (latas % 1 > 0) {
        latas = parseInt(latas) + 1;
        preco = latas * 80;
      }

      alert("Você terá que comprar " + latas + " lata(s) e isso custará R$ " + preco);
    },
    function questao_16() {
      area = parseFloat(window.prompt("Digite a área a ser pintada:"));

      // Caso 1

      latas_1 = area / (18 * 6);
      preco_1 = latas_1 * 80;
      if (latas_1 % 1 > 0) {
        latas_1 = parseInt(latas_1) + 1;
        preco_1 = latas_1 * 80;
      }

      // Caso 2

      galao_2 = area / (3.6 * 6);
      preco_2 = galao_2 * 25;
      if (galao_2 % 1 > 0) {
        galao_2 = parseInt(galao_2) + 1;
        preco_2 = galao_2 * 25;
      }

      // Caso 3

      area_3 = area * 1.1;

      latas_3 = area / (18 * 6);
      galao_3 = 0;
      if (latas_3 % 1 > 0) {
        resto = (latas_3 - parseInt(latas_3)) * 18 * 6;
        latas_3 = parseInt(latas_3);
        if (resto <= (3.6 * 6 * 3)) {
          galao_3 = Math.ceil(resto / (3.6 * 6));
        } else {
          latas_3 = Math.ceil(latas_3);
        }
      }
      preco_3 = latas_3 * 80 + galao_3 * 25;

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
    function questao_17() {
      arquivo = parseFloat(window.prompt("Digite o tamanho do arquivo em MB:"));
      velocidade = parseFloat(window.prompt("Digite a velocidade da sua internet em Mbps:"));

      segundos = arquivo / velocidade;
      minutos = segundos / 60;

      alert("O tempo aproximado em minutos para concluir o download é: " + Math.round(minutos));
    },

  ];

  while (true) {
    var opcao = parseInt(window.prompt("Digite o número da questão que você quer executar:"));
    questoes[opcao - 1]();
  }
})();
