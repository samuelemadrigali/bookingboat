<?php

use App\Http\Controllers\Backoffice\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Backoffice\Agency\CompanyController as AgencyCompanyController;
use App\Http\Controllers\Backoffice\Agency\FleetController;
use App\Http\Controllers\Backoffice\Agency\HomeController as AgencyHomeController;
use App\Http\Controllers\Backoffice\Agency\ProfileController;
use App\Http\Controllers\Backoffice\Agency\TourController;
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
                Route::get('/fleets', [FleetController::class, 'index'])->name('fleets.index');
                Route::get('/fleets/create', [FleetController::class, 'create'])->name('fleets.create');
                Route::post('/fleets', [FleetController::class, 'store'])->name('fleets.store');
                Route::get('/fleets/{fleet}/edit', [FleetController::class, 'edit'])->name('fleets.edit');
                Route::post('/fleets/{fleet}', [FleetController::class, 'update'])->name('fleets.update');
                Route::delete('/fleets/{fleet}', [FleetController::class, 'destroy'])->name('fleets.destroy');

                // Tour
                Route::get('/tours', [TourController::class, 'index'])->name('tours.index');
                Route::get('/tours/create', [TourController::class, 'create'])->name('tours.create');
                Route::post('/tours', [TourController::class, 'store'])->name('tours.store');
                Route::get('/tours/{tour}/edit', [TourController::class, 'edit'])->name('tours.edit');
                Route::post('/tours/{tour}', [TourController::class, 'update'])->name('tours.update');
                Route::delete('/tours/{tour}', [TourController::class, 'destroy'])->name('tours.destroy');

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
