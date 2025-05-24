import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Heart, PenTool, Share2, Users, Zap } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section id="features" className="bg-white/50 px-4 py-20">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                        Everything You Need to
                        <span className="text-orange-600"> Blog Successfully</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Powerful features designed to help you create, share, and grow your blog with ease.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <Card className="border-orange-200 transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <PenTool className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-gray-900">Rich Text Editor</CardTitle>
                            <CardDescription>
                                Create beautiful posts with our intuitive drag-and-drop editor. Add images, videos, and custom formatting
                                effortlessly.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 2 */}
                    <Card className="border-orange-200 transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-gray-900">Community Building</CardTitle>
                            <CardDescription>
                                Connect with like-minded bloggers, engage with your audience, and build a loyal community around your content.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 3 */}
                    <Card className="border-orange-200 transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-gray-900">Lightning Fast</CardTitle>
                            <CardDescription>
                                Optimized for speed and performance. Your blog loads instantly, keeping your readers engaged and coming back for more.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 4 */}
                    <Card className="border-orange-200 transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-gray-900">Content Management</CardTitle>
                            <CardDescription>
                                Organize your posts with tags, categories, and scheduling. Keep your content structured and easy to discover.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 5 */}
                    <Card className="border-orange-200 transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <Heart className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-gray-900">Reader Engagement</CardTitle>
                            <CardDescription>
                                Built-in commenting system, likes, and sharing features to maximize engagement with your audience.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 6 */}
                    <Card className="border-orange-200 transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <Share2 className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-gray-900">Social Integration</CardTitle>
                            <CardDescription>
                                Seamlessly share your posts across social media platforms and grow your reach beyond your blog.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
