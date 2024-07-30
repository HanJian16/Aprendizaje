@extends('layouts.landing')
@section('title', 'Services')
@section('content')
    <h1>Services</h1>
    <div class="cards">
        @component('_components.card')
            @slot('title', 'Service 1')
        @endcomponent
        @component('_components.card')
            @slot('title', 'Service 2')
        @endcomponent
    </div>
@endsection