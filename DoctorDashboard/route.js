(function () {

	angular.module('DoctorApp')
	.config(UserConfig);

	UserConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function UserConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		})

		$stateProvider.state('patientList', {
			url: '/patientList',
			templateUrl: 'templates/patientList.html'
		})

		$stateProvider.state('patientEdit', {
			url: '/patientEdit',
			templateUrl: 'templates/patientEdit.html'
		})

		// $urlRouterProvider.otherwise('/patientEdit.patientInfo');

		$stateProvider.state('patientEdit.patientInfo', {
			url: '/patientInfo',
			templateUrl: 'templates/patientInfo.html'
		})

		$stateProvider.state('patientEdit.medicalReport', {
			url: '/medicalReport',
			templateUrl: 'templates/medicalReport.html'
		})

		$stateProvider.state('appointmentRequest', {
			url: '/appointmentRequest',
			templateUrl: 'templates/appointmentRequest.html',
			controller: 'appointmentRequestController'
		})


	}




})();