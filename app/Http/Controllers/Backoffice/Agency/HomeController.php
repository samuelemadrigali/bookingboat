<?php

namespace App\Http\Controllers\Backoffice\Agency;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the agency dashboard.
     */
    public function index(): Response
    {
        return Inertia::render('Backoffice/Agency/Index');
    }
}
