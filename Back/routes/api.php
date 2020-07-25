<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Republic
Route::post('createDormitory', 'DormitoriesController@createDormitory');
Route::get('showDormitory/{id}', 'DormitoriesController@showDormitory');
Route::get('findDormitory/{ad_name}', 'DormitoriesController@findDormitory');
Route::get('listDormitory', 'DormitoriesController@listDormitory');
Route::put('updateDormitory/{id}', 'DormitoriesController@updateDormitory');
Route::delete('deleteDormitory/{id}', 'DormitoriesController@deleteDormitory');
Route::put('addUser', 'DormitoriesController@addUser');
Route::put('removeUser', 'DormitoriesController@removeUser');
Route::put('addDormitory/{id}', 'DormitoriesController@addDormitory');
Route::put('removeDormitory/{id}', 'DormitoriesController@removeDormitory');


//User
Route::post('createUser', 'UserController@createUser');