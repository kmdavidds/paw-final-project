import FeaturesSection from '@/components/features-section';
import FooterSection from '@/components/footer-section';
import HeroSection from '@/components/hero-section';
import PremiumSection from '@/components/premium-section';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Menu, PenTool, X } from 'lucide-react';
import { useState } from 'react';

export default function Homepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={route('home')} className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                                <PenTool className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-orange-600">bloggies</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center space-x-8 md:flex">
                            <a href="#home" className="text-gray-700 transition-colors hover:text-orange-600">
                                Home
                            </a>
                            <a href="#features" className="text-gray-700 transition-colors hover:text-orange-600">
                                Features
                            </a>
                            <a href="#premium" className="text-gray-700 transition-colors hover:text-orange-600">
                                Premium
                            </a>
                            <Link href={route('coming-soon')} className="text-gray-700 transition-colors hover:text-orange-600">
                                About
                            </Link>
                        </nav>

                        {/* Auth Buttons */}
                        <div className="hidden items-center space-x-4 md:flex">
                            <Link href={route('login')}>
                                <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 hover:text-orange-700">
                                    Login
                                </Button>
                            </Link>
                            <Link href={route('register')}>
                                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mt-4 border-t border-orange-200 pb-4 md:hidden">
                            <nav className="mt-4 flex flex-col space-y-4">
                                <a href="#home" className="text-gray-700 transition-colors hover:text-orange-600">
                                    Home
                                </a>
                                <a href="#features" className="text-gray-700 transition-colors hover:text-orange-600">
                                    Features
                                </a>
                                <a href="#premium" className="text-gray-700 transition-colors hover:text-orange-600">
                                    Premium
                                </a>
                                <Link href={route('coming-soon')} className="text-gray-700 transition-colors hover:text-orange-600">
                                    About
                                </Link>
                                <div className="flex flex-col space-y-2 pt-4">
                                    <Link href={route('login')}>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start text-orange-600 hover:bg-orange-50 hover:text-orange-700"
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                    <Link href={route('register')}>
                                        <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Premium Package Section */}
            <PremiumSection />

            {/* Footer */}
            <FooterSection />
        </div>
    );
}
