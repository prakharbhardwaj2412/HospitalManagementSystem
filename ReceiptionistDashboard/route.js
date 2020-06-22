(function () {

	angular.module('ReceiptionistApp')
	.config(ReceiptionistConfig);

	ReceiptionistConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function ReceiptionistConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		})

		$stateProvider.state('doctorsList', {
			url: '/doctorsList',
			templateUrl: 'templates/doctorsList.html'
		})

		$stateProvider.state('patientList', {
			url: '/patientList',
			templateUrl: 'templates/patientList.html'
		})

		$stateProvider.state('doctorInfo', {
			url: '/doctorInfo',
			templateUrl: 'templates/doctorInfo.html'
		})

		// $stateProvider.state('profile', {
		// 	url: '/profile',
		// 	templateUrl: 'templates/profile.html'
		// })


	}




})();