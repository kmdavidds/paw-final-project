import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle, PenTool } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-50 to-amber-50">
            {/* Header */}
            <header className="border-b border-orange-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4">
                    {/* Logo */}
                    <Link href={route('home')} className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                            <PenTool className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-orange-600">bloggies</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="overflow-hidden rounded-lg border-orange-200 shadow-xl">
                        <div className="bg-white pt-4 text-center">
                            <h1 className="my-4 text-2xl font-bold text-gray-900">Create an Account</h1>
                            <p className="text-gray-600">Enter your details below to create your account</p>
                        </div>
                        <div className="bg-white p-6">
                            <form className="space-y-6" onSubmit={submit}>
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Full name"
                                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="email@example.com"
                                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Password"
                                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                {/* Confirm Password Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="password_confirmation">Confirm Password</Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        placeholder="Confirm password"
                                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>

                                {/* Register Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-white hover:from-orange-600 hover:to-amber-600"
                                    tabIndex={5}
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                            Creating account...
                                        </>
                                    ) : (
                                        'Create account'
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href={route('login')} className="font-medium text-orange-600 hover:text-orange-700 hover:underline" tabIndex={6}>
                                Log in here
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
