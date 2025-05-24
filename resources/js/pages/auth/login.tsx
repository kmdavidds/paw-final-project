import { Link, useForm } from '@inertiajs/react';
import { LoaderCircle, PenTool } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
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
                            <h1 className="my-4 text-2xl font-bold text-gray-900">Welcome Back</h1>
                            <p className="text-gray-600">Login to your bloggies account to continue</p>
                        </div>
                        <div className="bg-white p-6">
                            <form className="space-y-6" onSubmit={submit}>
                                {status && <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-600">{status}</div>}

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Enter your email"
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
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Enter your password"
                                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                {/* Remember Me and Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            checked={data.remember}
                                            onClick={() => setData('remember', !data.remember)}
                                            tabIndex={3}
                                            className="border-orange-300 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
                                        />
                                        <Label htmlFor="remember" className="cursor-pointer text-sm text-gray-600">
                                            Remember me
                                        </Label>
                                    </div>
                                    {canResetPassword && (
                                        <a
                                            href={route('password.request')}
                                            className="text-sm text-orange-600 hover:text-orange-700 hover:underline"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </a>
                                    )}
                                </div>

                                {/* Login Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-white hover:from-orange-600 hover:to-amber-600"
                                    tabIndex={4}
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                            Logging in...
                                        </>
                                    ) : (
                                        'Login'
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Register Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            {"Don't have an account? "}
                            <a href={route('register')} className="font-medium text-orange-600 hover:text-orange-700 hover:underline" tabIndex={5}>
                                Create one here
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
