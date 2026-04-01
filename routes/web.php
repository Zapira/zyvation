<?php

use App\Http\Controllers\CMS\AuthController;
use App\Http\Controllers\CMS\TemplateController;
use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    if (str_starts_with(request()->path(), 'uploads/')) {
        abort(404);
    }
    return view('app');
});


Route::prefix('v1')->group(function () {
    Route::prefix('auth')->controller(AuthController::class)->group(function () {
        Route::post('register', 'register');
        Route::post('login', 'login');
    });

    Route::prefix('template')->controller(TemplateController::class)->group(function () {
        Route::get('/', 'getAllTemplate');
        Route::post('create', 'createTemplate');
    });
});

Route::middleware('auth', 'web')->group(function () {
    Route::prefix('v1')->group(function () {
        Route::get('auth/checking', function () {
            return response()->json(['message' => 'Authenticated']);
        });
    });
});
