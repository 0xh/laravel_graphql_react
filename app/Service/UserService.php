<?php

namespace App\Service;


use App\Model\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use phpseclib\Crypt\Random;
use Request as facadeReq;

class UserService
{

    public function __construct()
    {
    }


    public static function updateUserLoginData()
    {
        $user = Auth::user();
        $user->ip = facadeReq::ip();
        $user->last_login_at = Carbon::now();
        $user->save();
    }

}