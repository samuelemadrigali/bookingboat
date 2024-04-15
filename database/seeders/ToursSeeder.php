<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Tour;
use Illuminate\Database\Seeder;

class ToursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $company = Company::where('slug', 'example-company')->first();

        Tour::create([
            'company_id' => $company->id,
            'name' => [
                'it' => 'Tour di esempio',
                'en' => 'Example tour',
            ],
            'description' => [
                'it' => 'Un tour di esempio',
                'en' => 'An example tour',
            ],
            'location_from' => 'City A',
            'location_to' => 'City B',
            'start_time' => '08:00:00',
            'end_time' => '18:00:00',
            'is_active' => true,
        ]);
    }
}
