import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool, Edit, Trash2, ArrowLeft, Calendar } from 'lucide-react';
import { Link, router } from '@inertiajs/react';
import { Blog } from '@/types';

// filepath: /home/kmdavidds/Projects/paw-final-project/resources/js/pages/blogs/show.tsx

type Props = {
  blog: Blog;
};

export default function ShowBlogPage({ blog }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href={route('dashboard')} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <PenTool className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-orange-600">bloggies</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link href={route('blogs.edit', blog.id)}>
                <Button size="sm" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </Link>
              <Button
                size="sm"
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50"
                onClick={() => confirm('Are you sure you want to delete this blog?') && route('blogs.destroy', blog.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link href={route('dashboard')}>
          <Button variant="ghost" className="mb-8 text-orange-600 hover:text-orange-700 hover:bg-orange-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>

        {/* Blog Content */}
        <Card className="border-orange-200">
          <CardContent className="p-8">
            {/* Blog Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
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
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-orange-200">
          <Link href={route('dashboard')}>
            <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Blogs
            </Button>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
              onClick={() => router.delete(`/blogs/${blog.id}`)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Blog
            </Button>
            <Link href={route('blogs.edit', blog.id)}>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                <Edit className="w-4 h-4 mr-2" />
                Edit Blog
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}