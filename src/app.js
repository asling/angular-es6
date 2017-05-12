import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './features/home';
angular.module('app',[uirouter,home])
	.config(routing);