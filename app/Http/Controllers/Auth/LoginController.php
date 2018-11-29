<?php

namespace App\Http\Controllers\Auth;

use App\Service\UserService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login()
    {
        return view('home/login');
    }

    public function postLogin(Request $request)
    {
        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')], true)) {
            $user = Auth::user();
            UserService::updateUserLoginData();
            return $user;
        }
    }

    public function logout()
    {
        Auth::logout();
        return back();
        //return redirect('/login?type=login');
    }
}
