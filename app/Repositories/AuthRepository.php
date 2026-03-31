<?php

namespace App\Repositories;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Interfaces\AuthInterfaces;
use App\Models\User;
use MRizki28\ApiResponse\ApiResponse;

class AuthRepository implements AuthInterfaces
{
    protected $userModel;

    public function __construct(User $userModel)
    {
        $this->userModel = $userModel;
    }

    public function register(RegisterRequest $request)
    {
        try {
            $user = $this->userModel->create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            return ApiResponse::success($user, 'User registered successfully', 201);
        } catch (\Throwable $th) {
            return ApiResponse::error($th);
        }
    }

    public function login(LoginRequest $request) {}
}
