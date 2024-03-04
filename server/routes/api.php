<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\SearchController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/booking', [AuthController::class, 'register']);
Route::post('/update', [AuthController::class, 'update']);
Route::post("/get-user-data", [AuthController::class, 'getUserData']);

Route::get('/greeting', function () {
    return response()->json(['greeting' => 'Hello, world!']);
});

Route::post('/search', [SearchController::class, 'search']);