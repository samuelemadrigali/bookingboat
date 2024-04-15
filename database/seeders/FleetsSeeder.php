<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Fleet;
use Illuminate\Database\Seeder;

class FleetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $company = Company::where('slug', 'example-company')->first();

        Fleet::create([
            'company_id' => $company->id,
            'name' => [
                'it' => 'Flotta di esempio',
                'en' => 'Example fleet',
            ],
            'description' => [
                'it' => 'Una flotta di esempio',
                'en' => 'An example fleet',
            ],
            'is_active' => true,
            'capacity' => 10,
        ]);
    }
}
