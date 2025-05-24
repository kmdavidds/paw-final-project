import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Blog, type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Calendar, Edit, PenTool, Plus, Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [];

interface DashboardProps {
    blogs: Blog[];
}

export default function Dashboard({ blogs }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
                {/* Header */}
                <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/80 backdrop-blur-md">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                    <PenTool className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-2xl font-bold text-orange-600">bloggies</span>
                            </Link>

                            <Link href={route('blogs.create')}>
                                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600">
                                    <Plus className="mr-2 h-4 w-4" />
                                    New Blog
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-12">
                    <div className="mx-auto max-w-4xl">
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="mb-2 text-4xl font-bold text-gray-900">All Blogs</h1>
                            <p className="text-gray-600">Manage and view all your blog entries</p>
                        </div>

                        {/* Blog List */}
                        <div className="space-y-6">
                            {blogs.map((blog) => (
                                <Card key={blog.id} className="border-orange-200 transition-shadow hover:shadow-lg">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <CardTitle className="mb-2 text-xl text-gray-900 transition-colors hover:text-orange-600">
                                                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                                                </CardTitle>
                                                <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500">
                                                    <div className="flex items-center">
                                                        <Calendar className="mr-1 h-4 w-4" />
                                                        {new Date(blog.created_at).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        })}
                                                    </div>
                                                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                                                        {`${Math.ceil(blog.content.split(' ').length / 100)} minutes`}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex space-x-2">
                                                <Link href={`/blogs/${blog.id}/edit`}>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="border-orange-300 text-orange-600 hover:bg-orange-50"
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-red-300 text-red-600 hover:bg-red-50"
                                                    onClick={() => {
                                                        router.delete(`/blogs/${blog.id}`);
                                                    }}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="-mt-4">
                                        <p>{blog.content.slice(0, 200)}...</p>
                                        <div className="mt-4">
                                            <Link href={`/blogs/${blog.id}`}>
                                                <Button variant="ghost" className="p-0 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                                                    Read more →
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Empty State (if no blogs) */}
                        {blogs.length === 0 && (
                            <div className="py-16 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                                    <PenTool className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">No blogs yet</h3>
                                <p className="mb-6 text-gray-600">Start sharing your stories with the world</p>
                                <Link href={route('blogs.create')}>
                                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Create Your First Blog
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}
