<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="fragment" content="!">
    <link rel="icon" sizes="32x32" href="{{asset('images/favicon-32.png')}}">
    <link rel="icon" sizes="120x120" href="{{asset('images/favicon-120.png')}}">
    <link rel="icon" sizes="144x144" href="{{asset('images/favicon-144.png')}}">
    <link rel="icon" sizes="180x180" href="{{asset('images/favicon-180.png')}}">
    <link rel="icon" sizes="228x228" href="{{asset('images/favicon-228.png')}}">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/home.css') }}" rel="stylesheet">
    <link href="{{ mix('css/bootstrap-social.css') }}" rel="stylesheet">
    @stack('css')
</head>
<body>
@yield('content')

<!-- Scripts -->
<script src="{{ mix('js/home.js') }}"></script>
@stack('script')
<script src="{{ mix('js/postScript.js') }}"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129793507-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-129793507-1');
</script>

</body>
</html>
