import AuthLayout from "@/Layouts/AuthLayout";
import { EnvelopeOpen, Send } from "react-bootstrap-icons";
import { Button, Alert } from "@/Components/ui";
import { Head, Link, useForm } from "@inertiajs/react";
import useLocalization from "@/hooks/useLocalization";

export default function VerifyEmail({ status }) {
    const { t } = useLocalization();
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <AuthLayout>
            <Head title={t("form.email_verification")} />
            <div className="text-center">
                <EnvelopeOpen className="text-indigo-500 mx-auto w-16 h-16 mb-6" />
                <h1 className="text-2xl font-bold mb-2">
                    {t("form.email_verification")}
                </h1>
                <p className="text-gray-500 mb-6">
                    {t("form.email_verication_text")}
                </p>
            </div>

            {status === "verification-link-sent" && (
                <Alert color="success" className="text-sm">
                    {t("form.resend_verification_email_text")}
                </Alert>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button type="submit" disabled={processing}>
                        <Send className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2" />
                        {t("form.resend_verification_email")}
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="hover:text-indigo-500 underline underline-offset-2"
                    >
                        {t("logout")}
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
