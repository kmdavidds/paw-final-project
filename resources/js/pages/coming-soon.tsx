import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Clock, PenTool, Sparkles, Wrench } from 'lucide-react';

export default function ComingSoon() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-50 to-amber-50">
            <Head title="Coming Soon" />

            {/* Header */}
            <header className="border-b border-orange-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={route('home')} className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <PenTool className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-orange-600">bloggies</span>
                        </Link>

                        {/* Back Button */}
                        <Link href={route('home')}>
                            <button className="flex items-center rounded px-4 py-2 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 items-center justify-center px-4 py-2">
                <div className="container mx-auto max-w-2xl text-center">
                    {/* Status Badge */}
                    <div className="mb-6 inline-flex items-center rounded bg-orange-100 px-4 py-2 text-orange-700 hover:bg-orange-200">
                        <Clock className="mr-2 h-4 w-4" />
                        Under Development
                    </div>

                    {/* Main Illustration */}
                    <div className="mb-8">
                        <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-r from-orange-200 to-amber-200 shadow-lg">
                            <div className="absolute inset-4 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-300 to-amber-300">
                                <div className="relative">
                                    <Wrench className="h-16 w-16 text-orange-600" />
                                    <Sparkles className="absolute -top-2 -right-2 h-6 w-6 animate-pulse text-amber-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Message */}
                    <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
                        Coming
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"> Soon</span>
                    </h1>

                    <p className="mb-8 text-xl leading-relaxed text-gray-600">
                        We're working hard to bring you something amazing! This feature is currently under development and will be available in a
                        future update.
                    </p>

                    {/* Call to Action */}
                    <div className="space-y-4">
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href={route('home')}>
                                <button className="rounded bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 text-white hover:from-orange-600 hover:to-amber-600">
                                    Explore Other Features
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-orange-200 bg-white/60 py-8 backdrop-blur-sm">
                <div className="container mx-auto px-4 text-center">
                    <Link href={route('home')} className="mb-4 flex items-center justify-center space-x-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                            <PenTool className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-lg font-bold text-orange-600">bloggies</span>
                    </Link>
                    <p className="text-sm text-gray-600">© 2024 Bloggies. Building the future of blogging, one feature at a time.</p>
                </div>
            </footer>
        </div>
    );
}
