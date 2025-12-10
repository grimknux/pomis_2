<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->options('(:any)', function() {
    return service('response')
        ->setHeader('Access-Control-Allow-Origin', '*')
        ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
        ->setStatusCode(200);
});

$routes->group('api', ['namespace' => 'App\Controllers\Api'], function($routes) {
    // RESTful resource for users
    $routes->resource('users');
    $routes->post('login', 'Login::create');
});

