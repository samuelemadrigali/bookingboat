<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Fleet extends Model
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
            'status' => 'boolean',
        ];
    }

    /**
     * Get the image attribute.
     */
    public function getImageAttribute($value): string
    {
        return $value ? asset('storage/'.$value) : '';
    }

    /**
     * Get the company that owns the fleet.
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
