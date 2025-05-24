<?php

use App\Http\Controllers\BlogController;
use App\Models\Blog;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/coming-soon', function () {
    return Inertia::render('coming-soon');
})->name('coming-soon');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        $blogs = Blog::all();
        return Inertia::render('dashboard', [
            'blogs' => $blogs,
        ]);
    })->name('dashboard');
});

Route::resource('blogs', BlogController::class);

Route::get('/blogs', function () {
    return redirect('/dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
