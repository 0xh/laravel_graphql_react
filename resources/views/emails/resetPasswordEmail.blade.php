@component('mail::message')
Hello {{ $passwordResets->user->name }},

We got a request to reset your {{ config('app.name') }} password.

@component('mail::button', ['url' => config('app.url') .'/reset/password?email='. $passwordResets->user->email . '&token=' . $passwordResets->token])
Reset Password
@endcomponent

If you ignore this message, your password will not be changed.<br>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
