@extends('layouts.home')

@section('content')
    <div id="react-index"></div>
@endsection

@push('script')
    <script src="{{ mix('js/react/home/index.js') }}"></script>
@endpush
