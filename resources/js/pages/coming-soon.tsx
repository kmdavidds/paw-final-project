import { Head, Link } from '@inertiajs/react';
import { PenTool, Clock, Bell, ArrowLeft, Wrench, Sparkles } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex flex-col">
      <Head title="Coming Soon" />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={route('home')} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <PenTool className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-orange-600">bloggies</span>
            </Link>

            {/* Back Button */}
            <Link href={route('home')}>
              <button className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 px-4 py-2 rounded flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-2">
        <div className="container mx-auto max-w-2xl text-center">
          {/* Status Badge */}
          <div className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2 rounded inline-flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Under Development
          </div>

          {/* Main Illustration */}
          <div className="mb-8">
            <div className="relative mx-auto w-48 h-48 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full flex items-center justify-center shadow-lg">
              <div className="absolute inset-4 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full flex items-center justify-center">
                <div className="relative">
                  <Wrench className="w-16 h-16 text-orange-600" />
                  <Sparkles className="w-6 h-6 text-amber-500 absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Coming
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500"> Soon</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're working hard to bring you something amazing! This feature is currently under development and will be
            available in a future update.
          </p>

          {/* Call to Action */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={route('home')}>
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded">
                  Explore Other Features
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-orange-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href={route('home')} className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <PenTool className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-orange-600">bloggies</span>
          </Link>
          <p className="text-gray-600 text-sm">
            © 2024 Bloggies. Building the future of blogging, one feature at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}