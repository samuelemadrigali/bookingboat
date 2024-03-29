<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class HomeController extends Controller
{
    /**
     * Redirect the user to the appropriate dashboard.
     */
    public function redirect(): RedirectResponse
    {

        if (auth()->user()->is_admin) {
            return redirect()->route('admin.dashboard');
        }

        if (! auth()->user()->company) {
            return redirect()->route('agency.company.create');
        }

        return redirect()->route('agency.dashboard', ['company' => auth()->user()->company->slug]);
    }
}
