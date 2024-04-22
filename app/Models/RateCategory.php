<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RateCategory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_range_age' => 'boolean',
            'is_free' => 'boolean',
            'name' => 'json',
        ];
    }

    /**
     * Get the company that owns the rate category.
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
