import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Blog } from '@/types';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, Calendar, Edit, PenTool, Trash2 } from 'lucide-react';

// filepath: /home/kmdavidds/Projects/paw-final-project/resources/js/pages/blogs/show.tsx

type Props = {
    blog: Blog;
};

export default function ShowBlogPage({ blog }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href={route('dashboard')} className="flex items-center space-x-2">
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
                <Link href={route('dashboard')}>
                    <Button variant="ghost" className="mb-8 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blogs
                    </Button>
                </Link>

                {/* Blog Content */}
                <Card className="border-orange-200">
                    <CardContent className="p-8">
                        {/* Blog Header */}
                        <div className="mb-8">
                            <h1 className="mb-4 text-4xl leading-tight font-bold text-gray-900">{blog.title}</h1>
                            <div className="flex items-center text-gray-600">
                                <Calendar className="mr-2 h-5 w-5" />
                                <span>
                                    {new Date(blog.created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="prose prose-lg max-w-none">
                            {blog.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-6 leading-relaxed text-gray-700">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="mt-8 flex items-center justify-between border-t border-orange-200 pt-8">
                    <Link href={route('dashboard')}>
                        <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Blogs
                        </Button>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50"
                            onClick={() => router.delete(`/blogs/${blog.id}`)}
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Blog
                        </Button>
                        <Link href={route('blogs.edit', blog.id)}>
                            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600">
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Blog
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
