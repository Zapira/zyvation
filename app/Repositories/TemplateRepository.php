<?php

namespace App\Repositories;

use App\Helper\UploadFileHelper;
use App\Http\Requests\Template\TemplateRequest;
use App\Interfaces\TemplateInterfaces;
use App\Models\TemplateModel;
use Illuminate\Http\Request;
use MRizki28\ApiResponse\ApiResponse;
use Illuminate\Support\Str;

class TemplateRepository implements TemplateInterfaces
{
    protected $templateModel;

    public function __construct(TemplateModel $templateModel)
    {
        $this->templateModel = $templateModel;
    }

    public function getAllTemplate(Request $request) {
        $data = $this->templateModel->get();
        return ApiResponse::success($data, 'Get all template successfully');
    }

    public function createTemplate(TemplateRequest $request)
    {
        $filePath = null;
        try {
            $data = new $this->templateModel();
            $data->name_template = $request->input('name_template');
            $data->slug_template = Str::slug($request->input('name_template'));
            $data->is_active = $request->input('is_active', false);
            if ($request->hasFile('thumbnail')) {
                $filePath = UploadFileHelper::uploadFile($request->file('thumbnail'), 'uploads/template/');
                $data->thumbnail = $filePath;
            }

            $data->save();

            return ApiResponse::success($data, 'Template created successfully', 201);
        } catch (\Throwable $th) {
            if ($filePath && file_exists(public_path($filePath))) {
                unlink(public_path($filePath));
            }
            return ApiResponse::error($th);
        }
    }
}
