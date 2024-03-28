import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { BoxArrowInRight } from "react-bootstrap-icons";
import {
    Button,
    Heading,
    Checkbox,
    InputLabel,
    InputPassword,
    InputError,
} from "@/Components/ui";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <AuthLayout>
            <Head title="Log in" />
            <Heading variant="h3" className="text-center">
                Login
            </Heading>
            <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />

            <form onSubmit={submit} className="space-y-4" noValidate>
                <div>
                    <InputLabel
                        type="email"
                        name="email"
                        label="Email"
                        autoComplete="username"
                        isFocused={true}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} />
                </div>
                <div>
                    <div className="flex flex-row justify-between items-center mb-2">
                        <label htmlFor="inputpass" className="inline-block">
                            Password
                        </label>
                        <Link
                            href={route("password.request")}
                            className="text-indigo-500"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <InputPassword
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} />
                </div>
                <Checkbox
                    name="remember"
                    checked={data.remember}
                    label="Remember me"
                    onChange={(e) => setData("remember", e.target.checked)}
                />

                <div className="grid">
                    <Button type="submit" disabled={processing}>
                        <BoxArrowInRight className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2" />
                        Login
                    </Button>
                </div>
            </form>

            <div className="mt-4">
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
