(function () {

	angular.module('UserApp')
	.config(UserConfig);

	UserConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function UserConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		})

		$stateProvider.state('appointment', {
			url: '/appointment',
			templateUrl: 'templates/appointment.html',
			controller: 'appointmentController'
		})

		$stateProvider.state('medicalHistory', {
			url: '/medicalHistory',
			templateUrl: 'templates/medicalHistory.html',
			controller: 'historyController'
		})

		$stateProvider.state('doctorsList', {
			url: '/doctorsList',
			templateUrl: 'templates/doctorslist.html',
			controller: 'listController'
		})

		$stateProvider.state('profile', {
			url: '/profile',
			templateUrl: 'templates/profile.html',
			controller: 'profileController'
		})


	}




})();