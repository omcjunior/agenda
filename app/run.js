'use strict';
(function(){
	angular.module('appAgenda').run(run);

	function run($rootScope){
        $rootScope.appTitle = "Agenda";
	};

})();