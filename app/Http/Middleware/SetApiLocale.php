<?php

namespace App\Http\Middleware;

use Closure;
use App;
class SetApiLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->header('LOCALE'))
            App::setLocale($request->header('LOCALE'));
        return $next($request);
    }
}
