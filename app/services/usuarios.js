'use strict';

(function(){

	angular.module('appAgenda').factory('usuariosModel', usuariosModel);

	function usuariosModel(urlModel, $http, $q, toaster){

		var model = {
			// Dados
			data : [],
			ready : false,
			// Crud
			load : _load,
			add : _add,
			edit: _edit,
			// remove : _remove
		}

		return model;

		// carregar dados
		function _load(){
			var def = $q.defer();
			// força modelo a ficar não preparado
			model.ready = false;

			$http.get(urlModel.users.get).then(
				function(rest){
					// deu certo
					if (rest.status == 200) {

						model.ready = true;
						model.data = rest.data;

						def.resolve(model);
					}
					// deu certo mais não trouxe nada
					else if (rest.status == 204){
						model.ready = true;
						model.data = [];

						def.reject(rest.data);
					}
					// deu certo mais não sei!
					else {
						model.ready = false;
						def.reject(rest.data);
					}

				}, function(error){
					// deu erro
					model.ready = false;
					def.reject(error);
				})

			return def.promise;
		}

		function _add(obj){

			var def = $q.defer();
			// converter o campo checkbox em true e false
			if (typeof(obj) === 'undefined') {
				toaster.pop('error', "Erro", "Formulário não Preenchido!!");
				def.reject();
			} else {

				obj.UserState = !obj.UserState ? 0 : 1;
				var params = $.param(obj);

				$http.post(urlModel.users.add, params).then(
					function(rest){
						if (rest.status === 200){
							toaster.pop('success', "Beleza", "Deu Bom!!" + rest.data);
							model.load().then(function(){
								def.resolve();
							});
						} else {
							toaster.pop('error', "Erro", "Deu ruim!!" + rest.data);
							def.reject();
						}
					}, function(error){
						toaster.pop('error', "Erro", "Deu ruim!!" + error.data);
						def.reject(error);
					});

			}
			return def.promise;
		}

		function _edit(obj){

			var def = $q.defer();
			// converter o campo checkbox em true e false
			if (typeof(obj) === 'undefined') {
				toaster.pop('error', "Erro", "Formulário não Preenchido!!");
				def.reject();
			} else {

				obj.UserState = !obj.UserState ? 0 : 1;
				var params = $.param(obj);

				$http.post(urlModel.users.edit, params).then(
					function(rest){
						if (rest.status === 200){
							toaster.pop('success', "Beleza", "Deu Bom!!" + rest.data);
							model.load().then(function(){
								def.resolve();
							});
						} else {
							toaster.pop('error', "Erro", "Deu ruim!!" + rest.data);
							def.reject();
						}
					}, function(error){
						toaster.pop('error', "Erro", "Deu ruim!!" + error.data);
						def.reject(error);
					});

			}
			return def.promise;
		}
	}


})();