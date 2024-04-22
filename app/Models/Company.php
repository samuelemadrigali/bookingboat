<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    use HasFactory;

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'it' => 'boolean',
        'en' => 'boolean',
        'de' => 'boolean',
        'fr' => 'boolean',
        'es' => 'boolean',
    ];

    /**
     * Get the user that owns the company.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the fleets for the company.
     */
    public function fleets(): HasMany
    {
        return $this->hasMany(Fleet::class);
    }

    /**
     * Get the tours for the company.
     */
    public function tours(): HasMany
    {
        return $this->hasMany(Tour::class);
    }

    /**
     * Get the rate categories for the company.
     */
    public function rateCategories(): HasMany
    {
        return $this->hasMany(RateCategory::class);
    }

    /**
     * Get the shop actived languages.
     */
    public function getShopActivedLanguagesAttribute(): array
    {
        $langs = [
            'it' => $this->it,
            'en' => $this->en,
            'de' => $this->de,
            'fr' => $this->fr,
            'es' => $this->es,
        ];

        return array_keys(array_filter($langs, fn ($lang) => $lang));
    }
}
