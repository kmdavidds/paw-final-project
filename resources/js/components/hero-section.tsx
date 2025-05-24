import { Link } from '@inertiajs/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section id="home" className="flex h-[90vh] items-center px-4 py-20">
            <div className="container mx-auto text-center">
                <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200">✨ Welcome to the future of blogging</Badge>
                <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
                    Share Your
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"> Stories</span>
                    <br />
                    With the World
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                    Create beautiful, engaging blog posts with our intuitive platform. Connect with readers, build your audience, and turn your
                    passion into a thriving community.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href={route('register')}>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 text-white hover:from-orange-600 hover:to-amber-600"
                        >
                            Start Blogging Free
                        </Button>
                    </Link>
                    <Link href={route('coming-soon')}>
                        <Button size="lg" variant="outline" className="border-orange-300 px-8 py-3 text-orange-600 hover:bg-orange-50">
                            View Demo
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
