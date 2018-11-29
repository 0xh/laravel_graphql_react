<?php
namespace App\GraphQL\Type;

use App\Model\UserFollowing;
use App\Repository\UserRepository;
use App\Service\RoleService;
use Folklore\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name' => 'User',
        'description' => 'A user'
    ];

    /*
    * Uncomment following line to make the type input object.
    * http://graphql.org/learn/schema/#input-types
    */
    // protected $inputObject = true;

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::id(),
                'description' => 'The id of the user'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of user'
            ],
            'account' => [
                'type' => Type::string(),
                'description' => 'The account of user'
            ],
            'password' => [
                'type' => Type::string(),
                'description' => 'The password of user'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of user'
            ],
            'is_register_user' => [
                'type' => Type::boolean(),
                'description' => 'The is_register_user of user'
            ],
            'role_id' => [
                'type' => Type::string(),
                'description' => 'The role_id of user'
            ],
            'ip' => [
                'type' => Type::string(),
                'description' => 'The ip of user'
            ],
            'email_verified_at' => [
                'type' => Type::string(),
                'description' => 'The email_verified_at of user'
            ],
            'remember_token' => [
                'type' => Type::string(),
                'description' => 'The remember_token  of user'
            ],
            'last_login_at' => [
                'type' => Type::string(),
                'description' => 'The last_login_at of user'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'The created_at  of user'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'The updated_at of user'
            ]
        ];
    }

    // If you want to resolve the field yourself, you can declare a method
    // with the following format resolve[FIELD_NAME]Field()
    protected function resolveEmailField($root, $args)
    {
        return strtolower($root->email);
    }
}