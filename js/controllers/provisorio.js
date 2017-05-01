angular.module("Clt").controller("Provisorio", function($scope, $window){

  $scope.artigos = [
    {
      num: '2',
      antigo:{
        descricao: "Trabalho temporário é aquele prestado por pessoa física contratada por uma empresa de trabalho temporário que a coloca à disposição de uma empresa tomadora de serviços, para atender à necessidade de substituição transitória de pessoal permanente ou à demanda complementar de serviços.",
        paragrafos: [
            { descricao: "É proibida a contratação de trabalho temporário para a substituição de trabalhadores em greve, salvo nos casos previstos em lei."},
            { descricao: "Considera-se complementar a demanda de serviços que seja oriunda de fatores imprevisíveis ou, quando decorrente de fatores previsíveis, tenha natureza intermitente, periódica ou sazonal."},
        ]},
      novo:{
        descricao: "Trabalho temporário é aquele prestado por pessoa física a empresa de trabalho temporário ou diretamente a empresa tomadora de serviço ou cliente, para atender à necessidade transitória de substituição de seu pessoal regular e permanente ou a o acréscimo extraordi nário de serviços.",
        paragrafos: [
          { descricao: "Configura-se como acréscimo extraordinário de serviços, entre outros, aquele motivado por alteração sazonal na demanda por produtos e serviços."},
          { descricao: "A contratação de trabalhador temporário para substituir empregado em afastamento previdenciário se dará pelo prazo do afastamento do trabalhador permanente da empresa tomadora de serviço ou cliente, limitado à data em que venha a ocorrer a concessão da aposentadoria por invalidez de que trata o art. 475 do Decreto-Lei nº5.452, de 1º de maio de 1943 - Consolidação das Leis do Trabalho - CLT."},
        ]}
    },
    {
      num: '10',
      antigo:{
        descricao: "Qualquer que seja o ramo da empresa tomadora de serviços, não existe vínculo de emprego entre ela e os trabalhadores contratados pelas empresas de trabalho temporário.",
        paragrafos: [
            { descricao: "O contrato de trabalho temporário, com relação ao mesmo empregador, não poderá exceder ao prazo de cento e oitenta dias, consecutivos ou não."},
            { descricao: "O contrato poderá ser prorrogado por até noventa dias, consecutivos ou não, além do prazo estabelecido no § 1o deste artigo, quando comprovada a manutenção das condições que o ensejaram."},
            { descricao: "VETADO.(Incluído pela Lei nº 13.429, de 2017)"},
            { descricao: "Não se aplica ao trabalhador temporário, contratado pela tomadora de serviços, o contrato de experiência previsto no parágrafo único do art. 445 da Consolidação das Leis do Trabalho (CLT), aprovada pelo Decreto-Lei nº 5.452, de 1o de maio de 1943."},
            { descricao: "O trabalhador temporário que cumprir o período estipulado nos §§ 1o e 2o deste artigo somente poderá ser colocado à disposição da mesma tomadora de serviços em novo contrato temporário, após noventa dias do término do contrato anterior."},
            { descricao: "A contratação anterior ao prazo previsto no § 5o deste artigo caracteriza vínculo empregatício com a tomadora."},
            { descricao: "A contratante é subsidiariamente responsável pelas obrigações trabalhistas referentes ao período em que ocorrer o trabalho temporário, e o recolhimento das contribuições previdenciárias observará o disposto no art. 31 da Lei nº 8.212, de 24 de julho de 1991."},
        ]},
      novo:{
        descricao: "O contrato de trabalho temporário referente a um mesmo empregado poderá ter duração de até cento e vinte dias .",
        paragrafos: [
          { descricao: "O contrato de trabalho temporário poderá ser prorrogado uma vez, desde que a prorrogação seja efetuada no mesmo contrato e não exceda o período inicialmente estipulado."},
          { descricao: "Encerrado o contrato de trabalho temporário, é vedada à empresa tomadora de serviços ou cliente a celebração de novo contrato de trabalho temporário com o mesmo trabalhador, seja de maneira direta, seja por meio de empresa de trabalho temporário, pelo período de cento e vinte dias ou pelo prazo estipulado no contrato, se inferior a cento e vinte dias."},
          { descricao: "Na hipótese de o prazo do contrato temporário estipulado no caput ser ultrapassado, o período excedente do contrato passará a vigorar sem determinação  de prazo."},
          { descricao: "Não se aplica ao trabalhador temporário, contratado pela tomadora de serviços, o contrato de experiência previsto no parágrafo único do art. 445 da Consolidação das Leis do Trabalho (CLT), aprovada pelo Decreto-Lei nº 5.452, de 1o de maio de 1943."},
          { descricao: "O trabalhador temporário que cumprir o período estipulado nos §§ 1o e 2o deste artigo somente poderá ser colocado à disposição da mesma tomadora de serviços em novo contrato temporário, após noventa dias do término do contrato anterior."},
          { descricao: "A contratação anterior ao prazo previsto no § 5o deste artigo caracteriza vínculo empregatício com a tomadora."},
          { descricao: "A contratante é subsidiariamente responsável pelas obrigações trabalhistas referentes ao período em que ocorrer o trabalho temporário, e o recolhimento das contribuições previdenciárias observará o disposto no art. 31 da Lei nº 8.212, de 24 de julho de 1991."},
        ]}
    },

    {
      num: '11',
      antigo:{
        descricao: "O contrato de trabalho celebrado entre empresa de trabalho temporário e cada um dos assalariados colocados à disposição de uma empresa tomadora ou cliente será, obrigatoriamente, escrito e dele deverão constar, expressamente, os direitos conferidos aos trabalhadores por esta Lei.",
        paragrafos: [
            { descricao: "Será nula de pleno direito qualquer cláusula de reserva, proibindo a contratação do trabalhador pela empresa tomadora ou cliente ao fim do prazo em que tenha sido colocado à sua disposição pela empresa de trabalho temporário."},
        ]},
      novo:{
        descricao: "O contrato de trabalho temporário deverá ser obrigatoriamente redigido por escrito e devidamente registrado na Carteira de Trabalho e Previdência Social, nos termos do art.41 da CLT.",
        paragrafos: [
          { descricao: "Será nula de pleno direito qualquer cláusula de reserva que proíba a contratação do trabalhador pela empresa tomadora ou cliente ao fim do prazo em que tenha sido colocado à su a disposição pela empresa de trabalho temporário"},
          { descricao: "A ausência de contrato escrito consiste em irregularidade administrativa, passível de multa de até vinte por cento do valor previsto para o contrato, cuja base de cálculo será exclusivamente o valor do salário básico contratado."},
        ]}
    },

    {
      num: '12',
      antigo:{
        descricao: "Ficam assegurados ao trabalhador temporário os seguintes direitos: a) remuneração equivalente à percebida pelos empregados de mesma categoria da empresa tomadora ou cliente calculados à base horária, garantida, em qualquer hipótese, a percepção do salário mínimo regional; b) jornada de oito horas, remuneradas as horas extraordinárias não excedentes de duas, com acréscimo de 20% (vinte por cento); c) férias proporcionais, nos termos do artigo 25 da Lei nº 5.107, de 13 de setembro de 1966; d) repouso semanal remunerado; e) adicional por trabalho noturno; f) indenização por dispensa sem justa causa ou término normal do contrato, correspondente a 1/12 (um doze avos) do pagamento recebido; g) seguro contra acidente do trabalho; h) proteção previdenciária nos termos do disposto na Lei Orgânica da Previdência Social, com as alterações introduzidas pela Lei nº 5.890, de 8 de junho de 1973",
        paragrafos: [
          { descricao: "Registrar-se-á na Carteira de Trabalho e Previdência Social do trabalhador sua condição de temporário."},
          { descricao: "A empresa tomadora ou cliente é obrigada a comunicar à empresa de trabalho temporário a ocorrência de todo acidente cuja vítima seja um assalariado posto à sua disposição, considerando-se local de trabalho, para efeito da legislação específica, tanto aquele onde se efetua a prestação do trabalho, quanto a sede da empresa de trabalho temporário."},
        ]},
      novo:{
        descricao: "Ficam assegurados ao trabalhador temporário os mesmos direitos previstos na CLT relativos aos contratados por prazo determinado.",
        paragrafos: [
          { descricao: "É garantida ao trabalhador temporário a remuneração equivalente à percebida pelos empregados de mesma categoria da empresa tomadora ou cliente, calculada à base horária."},
          { descricao: "A empresa tomadora ou cliente fica obrigada a comunicar à empresa de trabalho temporário a ocorrência de todo acidente cuja vítima seja um assalariado posto à sua disposição."},
        ]}
    },

    {
      num: '14',
      antigo:{
        descricao: "As empresas de trabalho temporário são obrigadas a fornecer às empresas tomadoras ou clientes, a seu pedido, comprovante da regularidade de sua situação com o Instituto Nacional de Previdência Social.",
        paragrafos: []},
      novo:{
        descricao: "As empresas de trabalho temporário ficam obrigadas a fornecer às empresas tomadoras ou clientes, a seu pedido, comprovante da regularidade de sua situação com o Instituto Nacional do Seguro Social-INSS, recolhimentos de Fundo de Garantia do Tempo de Serviço - FGTS e Negativa de Débitos junto à Receita Federal do Brasil, sob pena de retenção dos valores devidos no contrato com a empresa de mão de obra temporária.",
        paragrafos: []}
    },
    {
      num: '18-A',
      antigo:{
        descricao: "Artigo Inexistente",
        paragrafos: []},
      novo:{
        descricao: "Aplicam-se também à contratação temporária prevista nesta Lei as disposições sobre trabalho em regime de tempo parcial previstas no art.58-A, caput e §1º, da CLT.",
        paragrafos: []}
    },
    {
      num: '18-B',
      antigo:{
        descricao: "Artigo Inexistente",
        paragrafos: []},
      novo:{
        descricao: "O disposto nesta Lei não se aplica aos empregados domésticos.",
        paragrafos: []}
    },
    {
      num: '19',
      antigo:{
        descricao: "Competirá à Justiça do Trabalho dirimir os litígios entre as empresas de serviço temporário e seus trabalhadores.",
        paragrafos: []},
      novo:{
        descricao: "Compete à Justiça do Trabalho dirimir os litígios entre as empresas de serviço temporário e os seus trabalhadores e entre estes e os seus contratantes, quando da contratação direta do trabalho temporário pelo empregador",
        paragrafos: [
          { descricao: "A empresa tomadora dos serviços, quando o interessado realizar a contratação por meio de  empresa  interposta, responde subsidiariamente pelas obrigações trabalhistas e previdenciárias."},
        ]}
    },
  ]

  $scope.provisorio = [];
  var count = 0;
  $scope.loadMore = function() {
    for(var i = 1; i <= 3; i++) {
      if(count < $scope.artigos.length)
        $scope.provisorio.push($scope.artigos[count++]);
    }
  };

});
