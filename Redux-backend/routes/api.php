<?php

use App\Http\Controllers\BarangController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/barang',[BarangController::class,'index']);
Route::post('/barang/create',[BarangController::class,'store']);
Route::delete('/barang/{id}',[BarangController::class,'destroy']);
Route::post('/barang/{id}/update',[BarangController::class,'update']);

