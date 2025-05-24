// Components
import { useForm } from '@inertiajs/react';
import { LoaderCircle, PenTool } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-50 to-amber-50">
            {/* Header */}
            <header className="border-b border-orange-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4">
                    {/* Logo */}
                    <a href={route('home')} className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                            <PenTool className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-orange-600">bloggies</span>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="overflow-hidden rounded-lg border-orange-200 shadow-xl">
                        <div className="bg-white pt-4 text-center">
                            <h1 className="my-4 text-2xl font-bold text-gray-900">Forgot Password</h1>
                            <p className="text-gray-600">Enter your email to receive a password reset link</p>
                        </div>
                        <div className="bg-white p-6">
                            {status && <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-600">{status}</div>}
                            <form className="space-y-6" onSubmit={submit}>
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoFocus
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Enter your email"
                                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-white hover:from-orange-600 hover:to-amber-600"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Email password reset link'
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Back to Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            {'Remember your password? '}
                            <a href={route('login')} className="font-medium text-orange-600 hover:text-orange-700 hover:underline">
                                Log in here
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
