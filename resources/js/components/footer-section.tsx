import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { PenTool } from 'lucide-react';

export default function FooterSection() {
    return (
        <footer className="bg-gray-900 px-4 py-16 text-white">
            <div className="container mx-auto">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="mb-4 flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <PenTool className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-orange-400">bloggies</span>
                        </Link>
                        <p className="mb-4 text-gray-400">Empowering bloggers to share their stories and connect with the world.</p>
                        <div className="flex space-x-4">
                            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-orange-400">
                              <span className="sr-only">Facebook</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                              >
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                              </svg>
                            </Button>
                            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-orange-400">
                              <span className="sr-only">Twitter</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                              >
                                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.001-7.496 14.001-13.986 0-.21-.005-.423-.014-.635.961-.695 1.797-1.562 2.457-2.549z" />
                              </svg>
                            </Button>
                            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-orange-400">
                              <span className="sr-only">Instagram</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.773.13 4.548.392 3.5 1.44 2.452 2.488 2.19 3.713 2.132 4.992.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.058 1.279.32 2.504 1.368 3.552 1.048 1.048 2.273 1.31 3.552 1.368 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.279-.058 2.504-.32 3.552-1.368 1.048-1.048 1.31-2.273 1.368-3.552.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.058-1.279-.32-2.504-1.368-3.552-1.048-1.048-2.273-1.31-3.552-1.368C15.668.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                              </svg>
                            </Button>
                           
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-orange-400">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="text-gray-400 transition-colors hover:text-white">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#premium" className="text-gray-400 transition-colors hover:text-white">
                                    Premium
                                </a>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Integrations
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-orange-400">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-orange-400">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={route('coming-soon')} className="text-gray-400 transition-colors hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">© 2024 Bloggies. All rights reserved. Made with ❤️ for bloggers everywhere.</p>
                </div>
            </div>
        </footer>
    );
}
