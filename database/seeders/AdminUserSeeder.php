<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'samuele.madrigali@gmail.com',
            'password' => Hash::make('Sm@892892'),
            'email_verified_at' => now(),
            'is_admin' => true,
        ]);
    }
}
