'use strict';

(function(){

	angular.module('appAgenda').config(config);

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			// Home View
			.state('home', {
				url : '/home',
				templateUrl : 'home/home.html',
				controller : 'HomeController',
				controllerAs : 'home'
			})

			// Users View
			.state('usuarios', {
				url : '/usuarios',
				templateUrl : 'usuarios/usuarios.html',
				controller : 'UsuariosController',
				controllerAs : 'usuarios'
			})

	}

})();