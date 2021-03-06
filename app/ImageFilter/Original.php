<?php

namespace App\ImageFilter;


use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class Original implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image;
    }
}