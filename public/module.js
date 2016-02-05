'use strict';

var app = angular.module('damonsSite', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('about', {url: '/', templateUrl: 'public/views/about.html'})
})

.run(function ($state,$rootScope) {
	$rootScope.$state = $state;
})

// .controller('MasterController', ['$scope', function($scope) {
// 	$('#fullpage').fullpage({
// 		anchors: ['Home', 'About', 'Skills', 'Projects', 'Experience'],
// 	});
// 	$('.button').click(goTo);
//
//
// 	function goTo(e){
// 		var page = e.target.text;
// 		console.log(page)
// 		$.fn.fullpage.moveTo(page);
// 	}
//
// }]);
