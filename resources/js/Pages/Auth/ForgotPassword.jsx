import AuthLayout from "@/Layouts/AuthLayout";
import { BoxArrowInRight } from "react-bootstrap-icons";
import {
    Button,
    Heading,
    InputLabel,
    InputError,
    Alert,
} from "@/Components/ui";
import { Head, useForm, Link } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />
            <Heading variant="h3" className="text-center">
                Forgot Password
            </Heading>
            <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />

            <p className="mb-4">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </p>

            {status && (
                <Alert color="success" className="text-sm">
                    {status}
                </Alert>
            )}

            <form onSubmit={submit} className="space-y-4" noValidate>
                <InputLabel
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    label="Email"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} className="mt-2" />

                <div className="grid">
                    <Button type="submit">
                        <BoxArrowInRight
                            className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"
                            disabled={processing}
                        />{" "}
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
            <div className="mt-4">
                <p className="text-center mb-3">
                    <span>Or</span>
                </p>
                <p className="text-center mb-4">
                    <span>Dont have an account? </span>
                    <Link
                        href={route("register")}
                        className="hover:text-indigo-500"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
