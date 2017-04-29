angular.module("Clt").controller("Main", function($scope, $window){

  $scope.appTitle = "DeMolay PB"
  $scope.icons = {
      menu: "reorder"
  }

  $scope.artigos = [
    {
      num: 1,
      antigo:{
        descricao: "Esta  Consolidação  estatui  as  normas  que  regulam as relações individuais e coletivas de trabalho,  nela previstas.",
        paragrafos: []},
      novo:{
        descricao: "A Consolidação das Leis do Trabalho, aprovada pelo  Decreto - lei  nº  5.452,  de  1º  de  maio  de  1943,  passa  a  vigorar com as seguintes alterações:",
        paragrafos: []}
    },
    {
      num: 2,
      antigo:{
        descricao: "Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço.",
        paragrafos: [
          { descricao: "Equiparam - se  ao  empregador,  para  os  efeitos  exclusivos  da  relação  de  emprego,  os  profissionais  liberais, as instituições de beneficência, as associações  recreativas  ou  outras  insti tuições  sem  fins  lucrativos,  que admitirem trabalhadores como empregados."},
          { descricao: "Sempre  que  uma  ou  mais  empresas,  tendo,  embora,   cada   uma   delas,   personalidade   jurídica  própria,    estiv erem    sob    a    direção,    controle    ou  administração de outra, constituindo grupo industrial,  comercial ou de qualquer outra atividade econômica,  serão,   para   os   efeitos   da   relação   de   emprego,  solidariamente  responsáveis  a  empresa  principal  e  cada uma das subordin adas."},
        ]},
      novo:{
        descricao: "Considera-se   empregador   a   empresa,  individual  ou  coletiva,  que,  assumindo  os  riscos  da  atividade   econômica,   admite,   assalaria   e   dirige   a  prestação pessoal de serviço.",
        paragrafos: [
          { descricao: "Equiparam - se  ao  empregador,  para  os  efeitos  exclusivos  da  relação  de  emprego,  os  profissionais  liberais, as instituições de beneficência, as associações  recreativas  ou  outras  insti tuições  sem  fins  lucrativos,  que admitirem trabalhadores como empregados."},
          { descricao: "Sempre que uma ou mais empresas, tendo cada uma  personalidade    jurídica    própria,    possuírem    direção,  controle  e  administração  centralizada  em  uma  delas,  exercendo  o  efetivo  controle  sobre  as  demais,  em  típica  relação    hierárquica,    constituindo    grup o    industrial,  comercial  ou  de  qualquer  outra  atividade  econômica,  serão,    para    os    efeitos    da    relação    de    emprego,  solidariamente  responsáveis  a  empresa  principal,  que  detém  o  efetivo  controle  das  demais,  e  cada  uma  das  outras empresas subordinadas."},
          { descricao: "Não caracteriza grupo econômico a mera identidade  de  sócios,  ainda  que  administradores  ou  detentores  da  maioria  do  capital  social,  se  não  comprovado  o  efetivo  controle de uma empresa sobre as demais."},
          { descricao: "Não se aplica ao empregador urbano o disposto no §  2º do art. 3º da Lei nº 5.889, de 29 de junho de 1973. (NR)"},
        ]}
    },
    {
      num: 3,
      antigo:{
        descricao: "Considera-se  empregado  toda  pessoa  física  que   prestar   serviços   de   natureza   não   eventual   a  empregador,  sob  a  dependência  deste  e  mediante  salário.",
        paragrafos: [
          { descricao: "Não  haverá  distinções  relativas  à  espécie de emprego e à condição de trabalhador, nem  entre o trabalho intelectual, técnico e manual."},
        ]},
      novo:{
        descricao: "Considera-se  empregado  toda  pessoa  física  que   prestar   serviços   de   natureza   não   eventual   a  empregador,  sob  a  dependência  deste  e  mediante  salário.",
        paragrafos: [
          { descricao: "Não  haverá  distinções  relativas  à  espécie de emprego e à condição de trabalhador, nem  entre o trabalho intelectual, técnico e manual."},
          { descricao: "O  negócio  jurídico  entre  empregadores  da  mesma  cadeia produtiva, ainda que em regime de exclusividade,  não caracteriza o vínculo empregat ício dos empregados da  pessoa física ou jurídica contratada com a pessoa física ou  jurídica  contratante  nem  a  responsabilidade  solidária  ou  subsidiária  de  débitos  e  multas  trabalhistas  entre  eles.  (NR)"},
        ]}
    },
  ]
});
