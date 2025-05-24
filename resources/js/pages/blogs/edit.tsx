import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Blog } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, PenTool, Save } from 'lucide-react';
import { FormEventHandler } from 'react';

type BlogForm = {
    title: string;
    content: string;
};

type Props = {
    blog: Blog;
};

export default function EditBlogPage({ blog }: Props) {
    const { data, setData, put, processing, errors } = useForm<Required<BlogForm>>({
        title: blog.title,
        content: blog.content,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('blogs.update', blog.id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href={route('home')} className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <PenTool className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-orange-600">bloggies</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto max-w-4xl px-4 py-12">
                {/* Back Button */}
                <Link href={route('dashboard', blog.id)}>
                    <Button variant="ghost" className="mb-8 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Button>
                </Link>

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Edit Blog</h1>
                    <p className="text-gray-600">Update your blog content</p>
                </div>

                {/* Blog Form */}
                <form id="blog-form" className="space-y-6" onSubmit={submit}>
                    <Card className="border-orange-200">
                        <CardHeader>
                            <CardTitle className="text-gray-900">Blog Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label htmlFor="title" className="font-medium text-gray-700">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Enter your blog title..."
                                    className="mt-2 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                                />
                                <InputError message={errors.title} />
                            </div>

                            <div>
                                <Label htmlFor="content" className="font-medium text-gray-700">
                                    Content
                                </Label>
                                <Textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    placeholder="Write your blog content here..."
                                    rows={20}
                                    className="mt-2 resize-none border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                                />
                                <InputError message={errors.content} />
                                <p className="mt-2 text-sm text-gray-500">Write in plain text. Keep it simple and focused.</p>
                            </div>

                            <div>
                                <Label className="font-medium text-gray-700">Created Date</Label>
                                <p className="mt-2 text-gray-600">
                                    {new Date(blog.created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6">
                        <Link href={route('blogs.show', blog.id)}>
                            <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Cancel
                            </Button>
                        </Link>

                        <div className="flex items-center">
                            <Link href={route('blogs.show', blog.id)}>
                                <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                                    View Blog
                                </Button>
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600"
                            disabled={processing}
                        >
                            <Save className="mr-2 h-4 w-4" />
                            {processing ? 'Updating...' : 'Update Blog'}
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
