'use strict';

var app = angular.module('damonsSite', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	// $locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('about', {url: '/about', templateUrl: 'public/views/about.html'})
		.state('experience', {url: '/experience', templateUrl: 'public/views/experience.html'})
		.state('projectsimproudof', {url: '/projectsimproudof', templateUrl: 'public/views/projectsimproudof.html'})
})

.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
})
