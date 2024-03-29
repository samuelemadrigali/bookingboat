<?php

use App\Http\Controllers\Backoffice\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Backoffice\Agency\CompanyController as AgencyCompanyController;
use App\Http\Controllers\Backoffice\Agency\HomeController as AgencyHomeController;
use App\Http\Controllers\Backoffice\Agency\ProfileController;
use App\Http\Controllers\Backoffice\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::domain(env('BACKOFFICE_DOMAIN'))->group(function () {

    // Auth
    require __DIR__.'/auth.php';

    // Guest
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });

    // Authenticated
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', [HomeController::class, 'redirect'])->name('dashboard');

        // Agency
        Route::get('/company/create', [AgencyCompanyController::class, 'create'])->name('agency.company.create');
        Route::post('/company', [AgencyCompanyController::class, 'store'])->name('agency.company.store');

        Route::middleware('hasCompany')->name('agency.')->group(function () {
            Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

            Route::prefix('{company}')->group(function () {
                Route::get('/', [AgencyHomeController::class, 'index'])->name('dashboard');
            });
        });

        // Admin
        Route::middleware('admin')
            ->prefix('admin')
            ->name('admin.')
            ->group(function () {
                Route::get('/', [AdminHomeController::class, 'index'])->name('dashboard');
            });

    });

});

Route::domain(env('SHOP_DOMAIN'))->group(function () {
});
