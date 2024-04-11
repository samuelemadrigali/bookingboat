<?php

use App\Http\Controllers\Backoffice\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Backoffice\Agency\CompanyController as AgencyCompanyController;
use App\Http\Controllers\Backoffice\Agency\FleetController;
use App\Http\Controllers\Backoffice\Agency\HomeController as AgencyHomeController;
use App\Http\Controllers\Backoffice\Agency\ProfileController;
use App\Http\Controllers\Backoffice\HomeController;
use App\Http\Controllers\Backoffice\LocalizationController;
use Illuminate\Support\Facades\Route;

Route::domain(env('VITE_BACKOFFICE_DOMAIN'))->group(function () {

    // Auth
    require __DIR__.'/auth.php';

    // Guest
    Route::get('/switch-locale/{locale}', [LocalizationController::class, 'switchLocale'])->name('switch-locale');

    // Authenticated
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', [HomeController::class, 'redirect'])->name('dashboard');

        // Agency
        Route::middleware('noCompany')->name('agency.')->group(function () {
            Route::get('/company/create', [AgencyCompanyController::class, 'create'])->name('company.create');
            Route::post('/company', [AgencyCompanyController::class, 'store'])->name('company.store');
        });

        Route::middleware('hasCompany')->name('agency.')->group(function () {
            Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

            Route::prefix('{company}')->group(function () {
                Route::get('/', [AgencyHomeController::class, 'index'])->name('dashboard');

                // Fleet
                Route::get('/fleet', [FleetController::class, 'index'])->name('fleet.index');
                Route::get('/fleet/create', [FleetController::class, 'create'])->name('fleet.create');
                Route::post('/fleet', [FleetController::class, 'store'])->name('fleet.store');
                Route::get('/fleet/{fleet}/edit', [FleetController::class, 'edit'])->name('fleet.edit');
                Route::post('/fleet/{fleet}', [FleetController::class, 'update'])->name('fleet.update');
                Route::delete('/fleet/{fleet}', [FleetController::class, 'destroy'])->name('fleet.destroy');
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

Route::domain(env('VITE_SHOP_DOMAIN'))->group(function () {
});
