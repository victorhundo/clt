angular.module("Clt").controller("Clt", function($scope, $window){

  $scope.artigos = [
    {
      num: '47',
      antigo:{
        descricao: "A emprêsa que mantiver empregado não registrado nos têrmos do art. 41 e seu parágrafo único, incorrerá na multa de valor igual a 1 (um) salário-mínimo regional, por empregado não registrado, acrescido de igual valor em cada reincidência.",
        paragrafos: [
            { descricao: "As demais infrações referentes ao registro de empregados sujeitarão a emprêsa à multa de valor igual à metade do salário-mínimo regional, dobrada na reincidência."},
        ]},
      novo:{
        descricao: "O empregador que mantiver empregado não registrado nos termos do art. 41 ficará sujeito a multa no valor de R$6.000,00 (seis mil reais) por empregado não registrado, acrescido de igual valor em cada reincidência.",
        paragrafos: [
          { descricao: "Especificamente quanto à infração a que se refere o caput, o valor final da multa aplicada será de R$1.000,00 (mil reais) por empregado não registrado, quando se tratar de microempresa ou empresa de pequeno porte."},
          { descricao: "A infração de que trata o caput constitui exceção à dupla visita."},
        ]}
    },
    {
      num: '47-A',
      antigo:{
        descricao: "Artigo Inexistente",
        paragrafos: []},
      novo:{
        descricao: "Na hipótese de não serem informados os dados a que se refere o parágrafo único do art.41 , o empregador ficará sujeito à multa de R$ 1.000,00 (mil reais) por empregado prejudicado",
        paragrafos: [
          { descricao: "Especificamente quanto à infração a que se refere o caput, o valor final da multa aplicada será de R$1.000,00 (mil reais) por empregado não registrado, quando se tratar de microempresa ou empresa de pequeno porte."},
          { descricao: "A infração de que trata o caput constitui exceção à dupla visita."},
        ]}
    },
    {
      num: '58-A',
      antigo:{
        descricao: "Considera-se trabalho em regime de tempo parcial aquele cuja duração não exceda a vinte e cinco horas semanais.",
        paragrafos: [
          { descricao: "O salário a ser pago aos empregados sob o regime de tempo parcial será proporcional à sua jornada, em relação aos empregados que cumprem, nas mesmas funções, tempo integral."},
          { descricao: "Para os atuais empregados, a adoção do regime de tempo parcial será feita mediante opção manifestada perante a empresa, na forma prevista em instrumento decorrente de negociação coletiva. (NR)."},
        ]},
      novo:{
        descricao: "Considera-se trabalho em regime de tempo parcial aquele cuja duração não exceda a trinta horas semanais, sem a possibilidade de horas suplementares semanais, ou, ainda, aquele cuja duração não exceda a vinte e seis horas semanais, com a possibilidade de acréscimo de até  seis horas suplementares semanais",
        paragrafos: [
          { descricao: "O salário a ser pago aos empregados sob o regime de tempo parcial será proporcional à sua jornada, em relação aos empregados que cumprem, nas mesmas funções, tempo integral."},
          { descricao: "Para os atuais empregados, a adoção do regime de tempo parcial será feita mediante opção manifestada perante a empresa, na forma prevista em instrumento decorrente de negociação coletiva. (NR)."},
          { descricao: "As horas suplementares à jornada de trabalho semanal normal serão pagas com o acréscimo de cinquenta por cento sobre o salário-hora normal."},
          { descricao: "Na hipótese de o contrato de trabalho em regime de tempo parcial ser estabelecido em número inferior a vinte e seis horas semanais, as horas suplementares a este quantitativo serão consideradas horas-extras para fins do pagamento estipulado no §3 º, estando também limitadas a seis horas suplementares semanais."},
          { descricao: "As horas suplementares da jornada de trabalho normal poderão ser compensadas diretamente até a semana imediatamente posterior à da sua execução, devendo ser feita a sua quitação na folha de pagamento do mês subsequente, caso não sejam compensadas."},
          { descricao: "É facultado ao empregado contratado sob regime de tempo parcial converter um terço do período de férias a que tiver direito em abono pecuniário."},
          { descricao: "As férias do regime de trabalho a tempo parcial serão regidas pelo  disposto no  art. 130."},
        ]}
    },
    {
      num: '523-A',
      antigo:{
        descricao: "Artigo Inexistente",
        paragrafos: []},
      novo:{
        descricao: "É assegurada a eleição de representante dos trabalhadores no local de trabalho, observados os seguintes critérios: I - um representante dos empregados poderá ser escolhido quando a empresa possuir mais de duzentos empregados, conforme disposto n o art.11 da Constituição; II - a eleição deverá ser convocada por edital, com antecedência mínima de quinze dias, o qual deverá ser afixado na empresa, com ampla publicidade, para inscrição de candidatura, independentemente de filiação sindical, garantido o voto secreto, sendo eleito o empregado mais votado daquela empresa, cuja posse ocorrerá após a conclusão da apuração do escrutínio, que será lavrada em ata e arquivada na empresa e no sindicato representativo da categoria; e III - o mandato terá duração de dois anos, permitida uma reeleição, vedada a dispensa arbitrária ou sem justa causa, desde o registro de sua candidatura até seis meses após o final do mandato.",
        paragrafos: [
          { descricao: "O representante dos trabalhadores no local de trabalho terá as seguintes  prerrogativas e competências: I - a garantia de participação na mesa de negociação do acordo coletivo de trabalho; e II - o dever de atuar na conciliação de conflitos trabalhistas no âmbito da empresa, inclusive quanto ao pagamento de verbas trabalhistas, no curso do contrato de trabalho, ou de verbas rescisórias."},
          { descricao: "Para os atuais empregados, a adoção do regime de tempo parcial será feita mediante opção manifestada perante a empresa, na forma prevista em instrumento decorrente de negociação coletiva. (NR)."},
          { descricao: "As convenções e os acordos coletivos de trabalho poderão conter cláusulas para ampliar o número de representantes de empregados previsto no caput até o limite de cinco representantes de empregados por estabelecimento."},
        ]}
    },
    {
      num: '611-A',
      antigo:{
        descricao: "Artigo Inexistente",
        paragrafos: []},
      novo:{
        descricao: "A convenção ou o acordo coletivo de trabalho tem força de lei quando dispuser sobre: I -parcelamento de período de férias anuais em até três vezes, com pagamento proporcional às parcelas, de maneira que uma das frações necessariamente corresponda a, no mínimo, duas semanas ininterruptas de trabalho; II - pacto quanto à de cumprimento da jornada de trabalho, limitada a duzentas e vinte horas mensais; III - participação nos lucros e resultados da empresa, de forma a incluir seu parcelamento no limite dos prazos do balanço patrimonial e/ou dos balancetes legalmente exigidos, não inferiores a duas parcelas; IV - horas in itinere; V - intervalo intrajornada, respeitado o limite mínimo de trinta minutos; VI - ultratividade da norma ou do instrumento coletivo de trabalho da categoria; VII - adesão ao Programa de Seguro - Emprego - PSE , de que trata a  Lei  nº 13.189, de 19 de novembro de 2015; VIII - plano de cargos e salários; IX - regulamento empresarial;X - banco  de horas, garantida a conversão da hora que exceder a jornada normal de  trabalho com acréscimo de, no mínimo, cinquenta por cento; XI - trabalho remoto; XII - remuneração por produtividade, incluídas as gorjetas percebidas pelo empregado; e XIII - registro de jornada de trabalho.",
        paragrafos: [
          { descricao: "No exame da Convenção ou Acordo Coletivo, a Justiça do Trabalho analisará preferencialmente a conformidade dos elementos essenciais do negócio jurídico, respeitado o disposto no art.104 da Lei nº 10.406, de 10 de janeiro de 2002 - Código Civil., balizada sua atuação pelo princípio da intervenção mínima na autonomia da vontade coletiva."},
          { descricao: "É vedada a alteração por meio de convenção ou acordo coletivo de norma de segurança e de medicina do trabalho, as quais são disciplinadas nas Normas Regulamentadoras do Ministério do Trabalho ou em legislação que disponha sobre direito de terceiro."},
          { descricao: "Na hipótese de flexibilização de norma legal relativa a salário e jornada de trabalho, observado o disposto nos incisos VI, XIII e XIV do caput do art.7º da Constituição, a convenção ou o acordo coletivo de trabalho firmado deverá explicitar a vantagem compensatória concedida em relação a cada cláusula redutora de direito legalmente assegurado."},
          { descricao: "Na hipótese de procedência de ação anulatória de cláusula de acordo ou convenção coletiva, a cláusula de vantagem compensatória deverá ser igualmente anulada, com repetição do indébito."},
        ]}
    },
    {
      num: '634',
      antigo:{
        descricao: "Na falta de disposição especial, a imposição das multas incumbe às autoridades regionais competentes em matéria de trabalho, na forma estabelecida por este Título.",
        paragrafos: [
          { descricao: "A aplicação da multa não eximirá o infrator da responsabilidade em que incorrer por infração das leis penais."},
        ]},
      novo:{
        descricao: "Na falta de disposição especial, a imposição das multas incumbe às autoridades regionais competentes em matéria de trabalho, na forma estabelecida por este Título.",
        paragrafos: [
          { descricao: "A aplicação da multa não eximirá o infrator da responsabilidade em que incorrer por infração das leis penais."},
          { descricao: "Os valores das multas administrativas expressos em moeda corrente serão reajustados anualmente pelo Índice Nacional de Preços ao Consumidor Amplo - IPCA do Instituto Brasileiro de Geografia e Estatística - IBGE ou pelo índice de preços que vier a substituí-lo."},
        ]}
    },
    {
      num: '775',
      antigo:{
        descricao: "Os prazos estabelecidos neste Título contam-se com exclusão do dia do começo e inclusão do dia do vencimento, e são contínuos e irreleváveis, podendo, entretanto, ser prorrogados pelo tempo estritamente necessário pelo juiz ou tribunal, ou em virtude de força maior, devidamente comprovada.",
        paragrafos: [
          { descricao: "Os prazos que se vencerem em sábado, domingo ou feriado, terminarão no primeiro dia útil seguinte."},
        ]},
      novo:{
        descricao: "Os prazos estabelecidos neste Título são contados em dias úteis, com exclusão do dia do começo e com inclusão do dia do vencimento.",
        paragrafos: [
          { descricao: "Os prazos que se vencerem em sábado, domingo ou dia feriado terminarão no  primeiro dia útil seguinte."},
          { descricao: "Os prazos podem ser prorrogados nas seguintes hipóteses: I - quando o juiz ou o tribunal entender como necessário; ou II - por motivo de força maior, devidamente comprovada."},
        ]}
    },
  ]
});
