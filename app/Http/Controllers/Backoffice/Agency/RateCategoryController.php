<?php

namespace App\Http\Controllers\Backoffice\Agency;

use App\Http\Controllers\Controller;
use App\Http\Requests\RateCategoryRequest;
use App\Models\Company;
use App\Models\RateCategory;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class RateCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Company $company): Response
    {
        return Inertia::render('Backoffice/Agency/Rates/Categories/Index', [
            'rateCategories' => $company->rateCategories()->paginate(20),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Company $company): Response
    {
        return Inertia::render('Backoffice/Agency/Rates/Categories/Create', [
            'company' => $company,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RateCategoryRequest $request, Company $company): RedirectResponse
    {
        $rateCategoryData = $request->validated();
        $rateCategoryData['company_id'] = $company->id;

        RateCategory::create($rateCategoryData);

        return redirect()->route('agency.rate-categories.index', $company)->with('success', __('flash.create.success'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company, RateCategory $rateCategory): Response
    {
        return Inertia::render('Backoffice/Agency/Rates/Categories/Edit', [
            'rateCategory' => $rateCategory,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RateCategoryRequest $request, Company $company, RateCategory $rateCategory): RedirectResponse
    {
        $rateCategoryData = $request->validated();

        $rateCategory->update($rateCategoryData);

        return redirect()->route('agency.rate-categories.index', $company)->with('success', __('flash.update.success'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company, RateCategory $rateCategory): RedirectResponse
    {
        $rateCategory->delete();

        return redirect()->route('agency.rate-categories.index', $company)->with('success', __('flash.delete.success'));
    }
}
