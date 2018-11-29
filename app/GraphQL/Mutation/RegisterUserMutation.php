<?php
namespace App\GraphQL\Mutation;

use App\Service\UserService;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Model\User;
use Illuminate\Http\request;

class RegisterUserMutation extends Mutation
{
    protected $attributes = [
        'name' => 'registerUser'
    ];

    protected $request;

    public function __construct(Request $request, $attributes = [])
    {
        parent::__construct($attributes);
        $this->request = $request;
    }

    public function type()
    {
        return GraphQL::type('User');
    }

    public function args()
    {
        return [
            'name' => ['name' => 'name', 'type' => Type::nonNull(Type::string())],
            'account' => ['name' => 'account', 'type' => Type::nonNull(Type::string())],
            'email' => ['name' => 'email', 'type' => Type::nonNull(Type::string())],
            'password' => ['name' => 'password', 'type' => Type::nonNull(Type::string())]
        ];
    }

    public function rules()
    {
        return [
            'name' => 'required',
            'account' => 'required|alpha_dash|unique:user',
            'email' => 'required|email|unique:user',
            'password' => 'required|min:8|max:32',
        ];
    }


    public function resolve($root, $args)
    {
        $user = new User;
        $user->email = strtolower($args['email']);
        $user->name = $args['name'];
        $user->account = $args['account'];
        $user->password = bcrypt($args['password']);
        $user->is_register_user = true;
        $user->save();
        return $user;
    }

}