<?php

namespace App\GraphQL\Mutation;

use App\Service\UserService;
use Folklore\GraphQL\Support\Type\Upload;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class UploadImageMutation extends Mutation
{
    protected $attributes = [
        'name' => 'uploadImage'
    ];

    protected $request;

    public function __construct(Request $request, $attributes = [])
    {
        parent::__construct($attributes);
        $this->request = $request;
    }

    public function type()
    {
        return Type::listOf(GraphQL::type('User'));
    }

    public function args()
    {
        return [
            'files' => ['name' => 'files', 'type' => Type::nonNull(Type::listOf(Upload::getInstance()))]
        ];
    }

    public function rules()
    {
        return [
//            'files' => 'required',
//            'files.*' => 'required',
//            'files.*.*' => 'required|mimes:jpg,jpeg,png|image|dimensions:min_width=100,min_height=200',
        ];
    }


    public function resolve($root, $args)
    {

        $acceptMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if ($this->request->hasFile('files')) {
            $imageFileBag = $this->request->files;
            foreach ($imageFileBag as $images) {
                foreach ($images as $image) {
                    $image = UploadedFile::createFromBase($image);
                    $imageMimeType = $image->getMimeType();
                    $imageName = $image->getClientOriginalName();
                    if(!in_array($imageMimeType, $acceptMimeTypes)) {
                        abort(403, $imageName . ' is not a valid image');
                    }


                    $path = $image->store('images');
                }
            }
        }
    }

    public function authorize($root, $args)
    {
        return auth('api')->check();
    }

}