<?php

use App\Http\Controllers\CMS\TemplateController;
use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    if (str_starts_with(request()->path(), 'uploads/')) {
        abort(404);
    }
    return view('app');
});

Route::prefix('v1')->group(function () {
    Route::prefix('template')->controller(TemplateController::class)->group(function () {
        Route::get('/', 'getAllTemplate');
        Route::post('create', 'createTemplate');
    });
});