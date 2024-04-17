<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TourRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name.*' => ['required', 'string', 'max:255'],
            'image' => ['nullable', 'image'],
            'description.*' => ['nullable', 'string'],
            'itinerary' => ['nullable', 'array'],
            'is_active' => ['required', 'boolean'],
            'location_from' => ['required', 'string'],
            'location_to' => ['required', 'string'],
            'start_time' => ['required', 'date_format:H:i', 'before:end_time'],
            'end_time' => ['required', 'date_format:H:i', 'after:start_time'],
            'fleets' => ['required', 'array'],
        ];
    }
}
