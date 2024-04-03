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
import useLocalization from "@/hooks/useLocalization";

export default function ForgotPassword({ status }) {
    const { t } = useLocalization();
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <AuthLayout>
            <Head title={t("form.forgot_password")} />
            <Heading variant="h3" className="text-center">
                {t("form.forgot_password")}
            </Heading>
            <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />

            <p className="mb-4">{t("form.forgot_password_text")}</p>

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
                    label={t("form.fields.email")}
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />
                <InputError message={errors.email} className="mt-2" />

                <div className="grid">
                    <Button type="submit">
                        <BoxArrowInRight
                            className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2"
                            disabled={processing}
                        />{" "}
                        {t("form.send_reset_link")}
                    </Button>
                </div>
            </form>
            <div className="mt-4">
                <p className="text-center mb-3">
                    <span>{t("form.or")}</span>
                </p>
                <p className="text-center mb-4">
                    <span>{t("form.do_not_have_account")} </span>
                    <Link
                        href={route("register")}
                        className="hover:text-indigo-500"
                    >
                        {t("form.register")}
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
