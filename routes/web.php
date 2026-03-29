<?php

use Illuminate\Support\Facades\Route;

Route::fallback(function () {
    if (str_starts_with(request()->path(), 'uploads/')) {
        abort(404);
    }
    return view('app');
});