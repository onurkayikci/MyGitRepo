/* global app:true */

'use strict';

var app = angular.module('angNewsApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute'
	]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
		templateUrl: 'views/posts.html',
		controller: 'PostsCtrl'
	});
}]);