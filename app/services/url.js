'use strict';

(function(){
	angular.module('appAgenda').factory('urlModel', urlModel);

	function urlModel(){
		
		var baseApi = 'http://intranet.gruposcheffer.com:9001/apiagenda';

		var model = {
			users : {
				get : baseApi + '/users/get',
				add : baseApi + '/users/add',
				edit : baseApi + '/users/edit',
				remove : baseApi + '/users/remove',
				login : baseApi + '/users/login',
				logoff : baseApi + '/users/logoff'
			}
		}
		
		return model;
	}

})();