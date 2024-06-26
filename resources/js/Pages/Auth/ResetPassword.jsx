import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { BoxArrowInRight } from "react-bootstrap-icons";
import {
    Button,
    Heading,
    InputLabel,
    InputPassword,
    InputError,
} from "@/Components/ui";
import { Head, useForm } from "@inertiajs/react";
import useLocalization from "@/hooks/useLocalization";

export default function ResetPassword({ token, email }) {
    const { t } = useLocalization();
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <AuthLayout>
            <Head title={t("form.reset_password")} />
            <Heading variant="h3" className="text-center">
                {t("form.change_password")}
            </Heading>
            <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />

            <form onSubmit={submit} className="space-y-4" noValidate>
                <div>
                    <InputLabel
                        type="email"
                        name="email"
                        label={t("form.fields.email")}
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} />
                </div>

                <div>
                    <InputPassword
                        type="password"
                        name="password"
                        label={t("form.fields.password")}
                        value={data.password}
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputPassword
                        type="password"
                        name="password_confirmation"
                        label={t("form.fields.password_confirmation")}
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />
                    <InputError message={errors.password_confirmation} />
                </div>

                <div className="grid">
                    <Button type="submit">
                        <BoxArrowInRight className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2" />
                        {t("form.reset_password")}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
