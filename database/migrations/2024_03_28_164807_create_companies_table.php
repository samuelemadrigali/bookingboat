<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('country');
            $table->string('city');
            $table->string('province');
            $table->string('address');
            $table->string('zip');
            $table->string('phone');
            $table->string('company_name');
            $table->string('vat')->unique();
            $table->string('pec')->nullable();
            $table->string('sdi_code')->nullable();
            $table->boolean('it')->default(true);
            $table->boolean('en')->default(false);
            $table->boolean('de')->default(false);
            $table->boolean('fr')->default(false);
            $table->boolean('es')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
