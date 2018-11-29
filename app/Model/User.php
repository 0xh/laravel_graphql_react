<?php

namespace App\Model;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, HasApiTokens, CanResetPassword;

    protected $guarded = [];
    protected $table = 'user';
    protected $hidden = [
        'password', 'remember_token', 'ip', 'role_id', 'email',
        'deleted_at', 'created_at', 'updated_at'
    ];

}
