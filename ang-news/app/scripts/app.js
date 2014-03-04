/* global app:true */

'use strict';

var app = angular.module('angNewsApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'firebase'
	]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
		templateUrl: 'views/posts.html',
		controller: 'PostsCtrl'
	});
}]);

app.constant('FIREBASE_URL', 'https://dazzling-fire-4978.firebaseio.com/');