@component('mail::message')
Hello {{ $user->name }},

Thank you for register {{ config('app.name') }},
click the button below to verify your email and sign up for the latest news.

@component('mail::button', ['url' => config('app.url') .'/verify/email?token=' . $user->email_verified_token])
Click Here
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
