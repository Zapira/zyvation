<?php

namespace App\Providers;

use App\Interfaces\AuthInterfaces;
use App\Interfaces\TemplateInterfaces;
use App\Repositories\AuthRepository;
use App\Repositories\TemplateRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(TemplateInterfaces::class, TemplateRepository::class);
        $this->app->bind(AuthInterfaces::class, AuthRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
