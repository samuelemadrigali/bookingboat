<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;

class CompaniesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::where('email', 'agency@gmail.com')->first();

        Company::create([
            'user_id' => $user->id,
            'name' => 'Example Company',
            'slug' => 'example-company',
            'country' => 'Italy',
            'city' => 'Rome',
            'province' => 'RM',
            'address' => '123 Example Street',
            'zip' => '00100',
            'phone' => '+39 0123 456789',
            'company_name' => 'Example Srl',
            'vat' => 'IT01234567890',
            'pec' => 'example@pec.com',
            'sdi_code' => '123456789012345',
            'it' => true,
            'en' => true,
        ]);
    }
}
