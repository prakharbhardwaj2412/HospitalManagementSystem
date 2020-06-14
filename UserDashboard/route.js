(function () {

	angular.module('UserApp')
	.config(UserConfig);

	UserConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function UserConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		})

		$stateProvider.state('medicalHistory', {
			url: '/medicalHistory',
			templateUrl: 'templates/medicalHistory.html'
		})


	}




})();