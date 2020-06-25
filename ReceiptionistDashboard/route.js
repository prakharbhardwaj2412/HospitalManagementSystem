(function () {

	angular.module('ReceiptionistApp')
	.config(ReceiptionistConfig);

	ReceiptionistConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function ReceiptionistConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		})

		$stateProvider.state('doctorsList', {
			url: '/doctorsList',
			templateUrl: 'templates/doctorsList.html',
			controller: 'doctorListController'
		})

		$stateProvider.state('patientList', {
			url: '/patientList',
			templateUrl: 'templates/patientList.html',
			controller: 'patientListController'
		})

		$stateProvider.state('doctorInfo', {
			url: '/doctorInfo',
			templateUrl: 'templates/doctorInfo.html'
		})

		$stateProvider.state('appointmentList', {
			url: '/appointmentList',
			templateUrl: 'templates/appointmentList.html'
		})

		$stateProvider.state('appointmentRequest', {
			url: '/appointmentRequest?"id"=x.id',
			templateUrl: 'templates/appointmentRequest.html',
			controller: 'appointmentRequestController'
		})


	}




})();