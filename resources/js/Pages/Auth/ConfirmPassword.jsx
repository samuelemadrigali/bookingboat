import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/ui/forms/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import useLocalization from "@/hooks/useLocalization";

export default function ConfirmPassword() {
    const { t } = useLocalization();
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <AuthLayout>
            <Head title={t("form.fields.password_confirmation")} />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {t("form.secure_area")}
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel
                        htmlFor="password"
                        value={t("form.fields.password")}
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        {t("form.confirm")}
                    </PrimaryButton>
                </div>
            </form>
        </AuthLayout>
    );
}
