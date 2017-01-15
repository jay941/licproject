/**
 * Main js
 * 
 */
var sudoApp = angular.module('sudoApp', ['ui.router']);
sudoApp.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');
	$stateProvider

	 
		.state('home', {
			url: '/home',
		    templateUrl: 'pages/home.html'
				
		})
			.state('policy', {

			url: '/policy',
			
					templateUrl: 'pages/navbar.html'
			
		})

		.state('contact', {
			url: '/contact',
			
				
					templateUrl: 'pages/navbar.html'
			
		})

		.state('about', {
			url: '/about',
			
					templateUrl: 'pages/navbar.html'
			
		})
		.state('registrarion', {
			url: '/registrarion',
		
					templateUrl: 'pages/registration.html'
				
		})

		.state('procedure', {
			url: '/procedure',
			
					templateUrl: 'pages/procedure.html'
			
		})
		.state('download', {
			url: '/download',
			
					templateUrl: 'pages/navbar.html'
				
		});


});