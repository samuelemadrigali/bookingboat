<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompanyRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'province' => 'required|string|max:2',
            'address' => 'required|string|max:255',
            'zip' => 'required|string|max:5',
            'phone' => 'required|string|max:255',
            'website' => 'required',
            'company_name' => 'required|string|max:255',
            'vat' => 'required|string|unique:companies',
            'pec' => 'nullable|email|required_without_all:sdi_code',
            'sdi_code' => 'nullable|string|required_without_all:pec',
        ];
    }
}
