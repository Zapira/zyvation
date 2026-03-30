<?php

namespace App\Interfaces;

use App\Http\Requests\Template\TemplateRequest;
use Illuminate\Http\Request;

interface TemplateInterfaces{
    public function getAllTemplate(Request $request);
    public function createTemplate(TemplateRequest $request);
}