<?php
namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Model\User;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Image;

class UserQuery extends Query
{
    protected $attributes = [
        'name' => 'user'
    ];

    public function type()
    {
        return GraphQL::pagination(GraphQL::type('User'));
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::id()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'account' => ['name' => 'account', 'type' => Type::string()],
            'password' => ['name' => 'password', 'type' => Type::string()],
            'email' => ['name' => 'email', 'type' => Type::string()],
            'role_id' => ['name' => 'role_id', 'type' => Type::string()],
            'gender' => ['name' => 'gender', 'type' => Type::string()],
            'avatar' => ['name' => 'avatar', 'type' => Type::string()],
            'ip' => ['name' => 'ip', 'type' => Type::string()],
            'email_verified_at' => ['name' => 'email_verified_at', 'type' => Type::string()],
            'remember_token' => ['name' => 'remember_token', 'type' => Type::string()],
            'last_login_at' => ['name' => 'last_login_at', 'type' => Type::string()],
            'created_at' => ['name' => 'created_at', 'type' => Type::string()],
            'updated_at' => ['name' => 'updated_at', 'type' => Type::string()],

            'offset' => ['name' => 'offset', 'type' => Type::int()],
            'limit' => ['name' => 'limit', 'type' => Type::int()],
        ];
    }

    public function resolve($root, $args)
    {
        $user = null;

        $query = User::query();
        if(!auth('api')->check() && empty($args)){
            $query =  $query->where('id', '-1');
        }

        if (isset($args['id'])) {
            $query =  $query->where('id' , $args['id']);
        }
        if(isset($args['name'])) {
            $query =  $query->where('name', $args['name']);
        }

        if(isset($args['account'])) {
            $query =  $query->where('account', $args['account']);
        }

        if(isset($args['password'])) {
            $query =  $query->where('password', $args['password']);
        }
        if(isset($args['email'])) {
            $query =  $query->where('email', $args['email']);
        }
        if(isset($args['role_id'])) {
            $query =  $query->where('role_id', $args['role_id']);
        }
        if(isset($args['gender'])) {
            $query =  $query->where('gender', $args['gender']);
        }
        if(isset($args['avatar'])) {
            $query =  $query->where('avatar', $args['avatar']);
        }
        if(isset($args['ip'])) {
            $query =  $query->where('ip', $args['ip']);
        }
        if(isset($args['email_verified_at'])) {
            $query =  $query->where('email_verified_at', $args['email_verified_at']);
        }
        if(isset($args['remember_token'])) {
            $query =  $query->where('remember_token', $args['remember_token']);
        }
        if(isset($args['last_login_at'])) {
            $query =  $query->where('last_login_at', $args['last_login_at']);
        }
        if(isset($args['created_at'])) {
            $query =  $query->where('created_at', $args['created_at']);
        }
        if(isset($args['updated_at'])) {
            $query =  $query->where('updated_at', $args['updated_at']);
        }

        $dataCount = $query->count();
        //Log::info('$query->toSql()===' . $query->toSql());
        $limit = isset($args['limit']) && isset($args['limit']) <= 100 ? $args['limit'] : 30;
        $query =  $query->limit($limit);
        $offset = 0;
        if (isset($args['offset'])) {
            $offset = $args['offset'];
            $query =  $query->offset($offset);
        }

        $data = $query->get();
        $currentPage = ceil($offset / $limit) + 1;
        return new LengthAwarePaginator($data, $dataCount, $limit, $currentPage);
    }

    public function authorize($root, $args)
    {
        return true;
    }
}