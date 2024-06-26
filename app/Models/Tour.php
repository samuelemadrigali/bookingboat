<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tour extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = ['fleets'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'itinerary' => 'array',
        'is_active' => 'boolean',
        'name' => 'json',
        'description' => 'json',
        'start_time' => 'datetime:H:i',
        'end_time' => 'datetime:H:i',
    ];

    /**
     * Get the image attribute.
     */
    public function getImageAttribute($value): string
    {
        return $value ? asset('storage/'.$value) : '';
    }

    /**
     * Get the company that owns the tour.
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * Get the fleets that belong to the tour.
     */
    public function fleets(): BelongsToMany
    {
        return $this->belongsToMany(Fleet::class);
    }
}
