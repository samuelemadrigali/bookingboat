<?php

namespace App\Http\Controllers\Backoffice\Agency;

use App\Http\Controllers\Controller;
use App\Http\Requests\FleetRequest;
use App\Models\Company;
use App\Models\Fleet;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class FleetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Company $company): Response
    {
        return Inertia::render('Backoffice/Agency/Fleets/Index', [
            'fleets' => $company->fleets()->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Backoffice/Agency/Fleets/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Company $company, FleetRequest $request): RedirectResponse
    {
        $fleetData = $request->validated();
        $fleetData['company_id'] = $company->id;

        if ($request->hasFile('image')) {
            $fleetData['image'] = $request->file('image')->store('fleets', 'public');
        }

        Fleet::create($fleetData);

        return redirect()->route('agency.fleets.index', $company->slug)->with('success', __('flash.create.success'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company, Fleet $fleet): Response
    {
        return Inertia::render('Backoffice/Agency/Fleets/Edit', [
            'fleet' => $fleet,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FleetRequest $request, Company $company, Fleet $fleet): RedirectResponse
    {
        $fleetData = $request->validated();

        if ($request->hasFile('image')) {
            $fleetData['image'] = $request->file('image')->store('fleets', 'public');
        }

        $fleet->update($fleetData);

        return redirect()->route('agency.fleets.index', $company->slug)->with('success', __('flash.update.success'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company, Fleet $fleet): RedirectResponse
    {
        $fleet->delete();

        return redirect()->route('agency.fleets.index', $company->slug)->with('success', __('flash.delete.success'));
    }
}
