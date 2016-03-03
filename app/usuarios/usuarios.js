'use strict';

(function(){

	angular.module('appAgenda').controller('UsuariosController', UsuariosController);

	function UsuariosController(usuariosModel){

		var vm = this;

		usuariosModel.load();

		vm.dataUser = usuariosModel;
		vm.states = 0;

		vm.adicionar = function(){
			vm.states = 1;
			console.log('Adicionando...');
		}

		vm.editar = function(obj, index){
			vm.states = 2;
			console.log('Editando', obj);
			vm.selected = index;
			obj.UserState = obj.UserState ? false : true;
			vm.form = obj;
		}

		vm.remover = function(obj){
			console.log('Removendo', obj);
		}

		vm.cancelar = function(){
			vm.states = 0;
			console.log('Cancelou');
		}

		vm.salvar = function(){

			switch(vm.states){
				case 1:
					usuariosModel.add(vm.form).then(function(){
						vm.states = 0;
						console.log('Salvou');
					}, function(error){
						console.log('Error', error);
					});
					break;

				case 2:
					usuariosModel.edit(vm.form).then(function(){
						vm.states = 0;
						console.log('Alterou!!!');
					}, function(error){
						console.log('Error', error);
					});
					break;

				default:
					console.log('Não sei o que vc quer fazer!');
			}

		}

	}
})();