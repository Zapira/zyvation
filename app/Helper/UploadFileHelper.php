<?php

namespace App\Helper;

class UploadFileHelper
{
    public static function uploadFile($file, $folder)
    {
        $filename = time() . '.' . $file->getClientOriginalExtension();
        file_put_contents(public_path(($folder) . $filename), file_get_contents($file));
        return $filename;
    }

    public static function updateFile($file, $folder, $oldFile){
        $filename = time() . '_' . $file->getClientOriginalExtension();
        file_put_contents(public_path(($folder) . $filename), file_get_contents($file));
        if (file_exists(public_path($folder . $oldFile))) {
            unlink(public_path($folder . $oldFile));
        }

        return $filename;
    }
}
