<?php

namespace App\Providers;

use App\Interfaces\TemplateInterfaces;
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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
