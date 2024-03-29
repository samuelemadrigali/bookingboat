<?php

namespace App\Http\Controllers\Backoffice\Agency;

use App\Helpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCompanyRequest;
use App\Models\Company;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * Display the company creation form.
     */
    public function create()
    {
        return Inertia::render('Backoffice/Agency/Company/Create');
    }

    /**
     * Store a new company in the database.
     */
    public function store(StoreCompanyRequest $request)
    {
        $validated = $request->validated();

        $validated['slug'] = Helpers::generateUniqueSlug(Company::class, $validated['name']);
        $validated['user_id'] = auth()->user()->id;

        $company = Company::create($validated);

        return redirect()->route('agency.dashboard', ['company' => $company->slug]);
    }
}
