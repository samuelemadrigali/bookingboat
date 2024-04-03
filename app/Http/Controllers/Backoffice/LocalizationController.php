<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;

class LocalizationController extends Controller
{
    public function switchLocale($locale)
    {
        if (! in_array($locale, config('app.available_locales'))) {
            abort(404);
        }

        session()->put('locale', $locale);

        return redirect()->back();
    }
}
