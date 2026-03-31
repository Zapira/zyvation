<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Interfaces\AuthInterfaces;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authInterfaces;

    public function __construct(AuthInterfaces $authInterfaces)
    {
        $this->authInterfaces = $authInterfaces;
    }

    public function register(RegisterRequest $request)
    {
        return $this->authInterfaces->register($request);
    }

    public function login(LoginRequest $request)
    {
        return $this->authInterfaces->login($request);
    }
}
