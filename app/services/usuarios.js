'use strict';

(function(){

	angular.module('appAgenda').factory('usuariosModel', usuariosModel);

	function usuariosModel(urlModel, $http, $q){

		var model = {
			// Dados
			data : [],
			ready : false,
			// Crud
			load : _load,
			// add : _add,
			// edit: _edit,
			// remove : _remove
		}

		return model;

		// carregar dados
		function _load(){
			var def = $q.defer();

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

	}


})();