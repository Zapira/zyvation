<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use App\Http\Requests\Template\TemplateRequest;
use App\Interfaces\TemplateInterfaces;
use Illuminate\Http\Request;

class TemplateController extends Controller
{
    protected $templateInterface;
    public function __construct(TemplateInterfaces $templateInterface)
    {
        $this->templateInterface = $templateInterface;
    }

    public function getAllTemplate(Request $request)
    {
        return $this->templateInterface->getAllTemplate($request);
    }

    public function createTemplate(TemplateRequest $request)
    {
        return $this->templateInterface->createTemplate($request);
    }
}
