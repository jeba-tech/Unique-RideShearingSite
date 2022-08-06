<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']); 

 Route::get('/customerView',[AdminController::class,'customerView']);
 Route::get('/formcustomer/{id}',[AdminController::class,'formCustomer']);

////////////Rider List API////////////
 Route::get('/riderList',[AdminController::class,'RiderAPIList']);
 ////////////Rider add API////////////
 Route::post('/riderList',[AdminController::class,'RiderAPIPost']);
 ////////////Rider Update API////////////
 Route::put('/riderList/{id}',[AdminController::class,'RiderUpdateAPI']);
  ////////////Rider Delete API////////////
  Route::get('/riderList/{id}',[AdminController::class,'RiderGetAPI']);
 Route::delete('/riderList/{id}',[AdminController::class,'RiderDeleteAPI']);
  ////////////Rider View API////////////
  Route::get('/riderList/{id}',[AdminController::class,'RiderViewAPI']);
  Route::get('/riderList/{key}',[AdminController::class,'RiderSearchAPI']);

//-------------------Customer APi---------------------------
Route::post('/customerRegistrationSubmit',[CustomerController::class, 'CustomerRegistrationApi'])->name('CustomerRegistrationApi');
//-------------------Customer APi---------------------------
 Route::post('/adminlogin',[AdminController::class,'adminapilogin']);
