import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, PenTool, Save } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InputError from '@/components/input-error';

// filepath: /home/kmdavidds/Projects/paw-final-project/resources/js/pages/blogs/create.tsx


type BlogForm = {
  title: string;
  content: string;
};

export default function CreateBlogPage() {
  const { data, setData, post, processing, errors } = useForm<Required<BlogForm>>({
    title: '',
    content: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('blogs.store'));
  };

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

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create New Blog</h1>
          <p className="text-gray-600">Write and share your thoughts</p>
        </div>

        {/* Blog Form */}
        <form id="blog-form" className="space-y-6" onSubmit={submit}>
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Blog Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-gray-700 font-medium">
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
                <Label htmlFor="content" className="text-gray-700 font-medium">
                  Content
                </Label>
                <Textarea
                  id="content"
                  value={data.content}
                  onChange={(e) => setData('content', e.target.value)}
                  placeholder="Write your blog content here..."
                  rows={20}
                  className="mt-2 border-orange-200 focus:border-orange-400 focus:ring-orange-400 resize-none"
                />
                <InputError message={errors.content} />
                <p className="text-sm text-gray-500 mt-2">Write in plain text. Keep it simple and focused.</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6">
            <Link href={route('dashboard')}>
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </Link>

            <Button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
              disabled={processing}
            >
              <Save className="w-4 h-4 mr-2" />
              {processing ? 'Saving...' : 'Save Blog'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}