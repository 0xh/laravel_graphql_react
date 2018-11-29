@extends('layouts.home')

@section('content')
    <div id="react-login"></div>
@endsection

@push('script')
    <script src="{{ mix('js/react/home/login.js') }}"></script>
@endpush
