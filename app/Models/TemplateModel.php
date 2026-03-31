<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name_template', 'slug_template', 'thumbnail', 'is_active'])]
class TemplateModel extends Model
{
    use HasFactory, HasUlids;
    protected $table = 'tb_template';
}
