<?php

namespace App\Interfaces;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;

interface AuthInterfaces{
    public function register(RegisterRequest $request);
    public function login(LoginRequest $request);
}