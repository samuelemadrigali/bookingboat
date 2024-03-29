<?php

namespace App;

use Illuminate\Support\Str;

class Helpers
{
    /**
     * Generate a unique slug for a model.
     */
    public static function generateUniqueSlug(string $model, string $name): string
    {
        $slug = Str::slug($name);
        $count = $model::where('slug', $slug)->count();
        $suffix = 1;
        while ($count > 0) {
            $slug = $slug.'-'.$suffix;
            $count = $model::where('slug', $slug)->count();
            $suffix++;
        }

        return $slug;
    }
}
