import { Link } from '@inertiajs/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';


export default function PremiumSection() {
    return (
        <section id="premium" className="px-4 py-20">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">
                        Unlock Your
                        <span className="text-orange-600"> Full Potential</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Take your blogging to the next level with our premium features and exclusive benefits.
                    </p>
                </div>

                <div className="mx-auto max-w-lg">
                    <Card className="relative overflow-hidden border-2 border-orange-300 shadow-2xl">
                        {/* Premium Badge */}
                        <div className="absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-white">
                            <Star className="mr-1 inline h-4 w-4" />
                            Premium
                        </div>

                        <CardHeader className="pb-2 text-center">
                            <CardTitle className="text-3xl font-bold text-gray-900">Bloggies Premium</CardTitle>
                            <CardDescription className="text-lg">Everything you need to become a professional blogger</CardDescription>
                            <div className="mt-6">
                                <div className="text-5xl font-bold text-orange-600">Rp150.000</div>
                                <div className="mt-2 text-gray-600">Lifetime Access</div>
                                <Badge className="mt-2 bg-green-100 text-green-700">One-time payment</Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-6">
                            <ul className="mb-8 space-y-4">
                                {[
                                    'Unlimited blog posts and storage',
                                    'Custom domain and branding',
                                    'Advanced analytics and insights',
                                    'Priority customer support',
                                    'Monetization tools and features',
                                    'SEO optimization tools',
                                    'Custom themes and templates',
                                    'Email newsletter integration',
                                    'Advanced comment moderation',
                                    'Export and backup options',
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href={route('coming-soon')}>
                                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-lg text-white hover:from-orange-600 hover:to-amber-600">
                                    Get Premium Access
                                </Button>
                            </Link>

                            <p className="mt-4 text-center text-sm text-gray-500">30-day money-back guarantee</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
