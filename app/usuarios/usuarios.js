'use strict';
(function(){
	angular.module('appAgenda').controller('UsuariosController', UsuariosController);

	function UsuariosController(usuariosModel){
		var vm = this;

		usuariosModel.load();

		vm.dataUser = usuariosModel;

		vm.editar = function(obj, index){
			console.log('Editando', obj);
			vm.selected = index;
		}

		vm.remover = function(obj){
			console.log('Removendo', obj);
		}
	}
})();