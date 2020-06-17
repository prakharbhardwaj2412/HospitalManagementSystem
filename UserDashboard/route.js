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

		$stateProvider.state('appointment', {
			url: '/appointment',
			templateUrl: 'templates/appointment.html'
		})

		$stateProvider.state('medicalHistory', {
			url: '/medicalHistory',
			templateUrl: 'templates/medicalHistory.html'
		})

		$stateProvider.state('doctorsList', {
			url: '/doctorsList',
			templateUrl: 'templates/doctorslist.html'
		})

		$stateProvider.state('profile', {
			url: '/profile',
			templateUrl: 'templates/profile.html'
		})


	}




})();