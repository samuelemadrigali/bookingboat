<?php

namespace App\Http\Controllers\Backoffice\Agency;

use App\Http\Controllers\Controller;
use App\Http\Requests\TourRequest;
use App\Models\Company;
use App\Models\Tour;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class TourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Company $company): Response
    {
        return Inertia::render('Backoffice/Agency/Tour/Index', [
            'tours' => $company->tours()->paginate(20),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Company $company): Response
    {
        return Inertia::render('Backoffice/Agency/Tour/Create', [
            'company' => $company,
            'fleets' => $company->fleets,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TourRequest $request, Company $company): RedirectResponse
    {
        $tourData = $request->validated();
        $tourData['company_id'] = $company->id;

        if ($request->hasFile('image')) {
            $tourData['image'] = $request->file('image')->store('tours');
        }

        $tour = Tour::create($tourData);

        $tour->fleets()->attach($request->fleets);

        return redirect()->route('agency.tours.index', $company);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company, Tour $tour): Response
    {
        return Inertia::render('Backoffice/Agency/Tour/Edit', [
            'tour' => $tour,
            'fleets' => $company->fleets,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TourRequest $request, Company $company, Tour $tour): RedirectResponse
    {
        $tourData = $request->validated();

        if ($request->hasFile('image')) {
            $tourData['image'] = $request->file('image')->store('tours');
        }

        $tour->update($tourData);

        $tour->fleets()->sync($request->fleets);

        return redirect()->route('agency.tours.index', $company);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company, Tour $tour): RedirectResponse
    {
        $tour->delete();

        return redirect()->route('agency.tour.index', $company);
    }
}
