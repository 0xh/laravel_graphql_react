<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('logout', 'Auth\LoginController@logout');
Route::post('login', 'Auth\LoginController@postLogin');
Route::get('login', 'Auth\LoginController@login')->middleware('guest');

Route::group(
    [
        //'domain' => env('APP_URL', 'example.com'),
        //'middleware' => ['auth']
    ], function () {

    Route::get('{all}', 'Home\HomeController@index')
        ->where('all','^((?!images).)*?');
        //->where(['all' => '.*']);
});