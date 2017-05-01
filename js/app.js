angular.module('Clt', ['ngMaterial', 'infinite-scroll']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('blue');
});
