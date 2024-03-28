import AuthLayout from "@/Layouts/AuthLayout";
import { EnvelopeOpen, Send } from "react-bootstrap-icons";
import { Button, Alert } from "@/Components/ui";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <AuthLayout>
            <Head title="Email Verification" />
            <div className="text-center">
                <EnvelopeOpen className="text-indigo-500 mx-auto w-16 h-16 mb-6" />
                <h1 className="text-2xl font-bold mb-2">Email Verification</h1>
                <p className="text-gray-500 mb-6">
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? If you didn't receive the email, we will
                    gladly send you another.
                </p>
            </div>

            {status === "verification-link-sent" && (
                <Alert color="success" className="text-sm">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </Alert>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button type="submit" disabled={processing}>
                        <Send className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2" />
                        Resend Verification Email
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="hover:text-indigo-500 underline underline-offset-2"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
