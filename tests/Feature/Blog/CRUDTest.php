<?php
use App\Models\User;
use App\Models\Blog;


test('blog index page can be rendered', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/dashboard');

    $response->assertStatus(200);
});

test('blog can be created', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/blogs', [
        'title' => 'Test Blog',
        'content' => 'This is a test blog content.',
    ]);

    $response->assertRedirect('/dashboard');
    $this->assertDatabaseHas('blogs', [
        'title' => 'Test Blog',
        'content' => 'This is a test blog content.',
    ]);
});

test('single blog can be displayed', function () {
    $user = User::factory()->create();
    $blog = Blog::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->get("/blogs/{$blog->id}");

    $response->assertStatus(200);
    $response->assertSee($blog->title);
    $response->assertSee($blog->content);
});

test('blog can be updated', function () {
    $user = User::factory()->create();
    $blog = Blog::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->put("/blogs/{$blog->id}", [
        'title' => 'Updated Blog Title',
        'content' => 'Updated blog content.',
    ]);

    $response->assertRedirect("/dashboard?{$blog->id}");
    $this->assertDatabaseHas('blogs', [
        'id' => $blog->id,
        'title' => 'Updated Blog Title',
        'content' => 'Updated blog content.',
    ]);
});

test('blog can be deleted', function () {
    $user = User::factory()->create();
    $blog = Blog::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->delete("/blogs/{$blog->id}");

    $response->assertRedirect('/dashboard');
    $this->assertDatabaseMissing('blogs', [
        'id' => $blog->id,
    ]);
});