<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateModel extends Model
{
    use HasFactory, HasUlids;

    protected $table = 'tb_template';
    protected $fillable = [
        'name_template',
        'thumbnail',
        'is_active',
    ];
}
