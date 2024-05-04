<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SuperheroController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/superheroes', [SuperheroController::class, 'index']);
Route::get('/superheroe/{superheroe}', [SuperheroController::class, 'show']);
