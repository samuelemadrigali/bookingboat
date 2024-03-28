<?php

use App\Http\Controllers\Backoffice\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::domain(env('BACKOFFICE_DOMAIN'))->group(function () {
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

        // Admin
        Route::middleware('admin')
            ->prefix('admin')
            ->name('admin.')
            ->group(function () {
            });

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    });

    // Auth
    require __DIR__.'/auth.php';
});

Route::domain(env('SHOP_DOMAIN'))->group(function () {
});
