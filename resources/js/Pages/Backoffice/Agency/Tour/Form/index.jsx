import useLocalization from "@/hooks/useLocalization";
import useFields from "./useFields";
import FormBuilder from "@/Components/backoffice/forms/FormBuilder";
import { usePage } from "@inertiajs/react";

export default function Form({ action }) {
    const { t } = useLocalization();

    const { company, tour } = usePage().props;
    const fields = useFields();

    let submit = {};
    if (action === "create") {
        submit = {
            label: t("create"),
            method: "post",
            route: route("agency.tours.store", { company: company.slug }),
        };
    } else if (action === "edit") {
        submit = {
            label: t("edit"),
            method: "post",
            route: route("agency.tours.update", {
                company: company.slug,
                tour: tour.id,
            }),
            transform: (data) => {
                if (
                    data.image !== null &&
                    data.image instanceof File === false
                ) {
                    delete data.image;
                }
                return data;
            },
        };
    }

    return <FormBuilder initialData={tour} fields={fields} submit={submit} />;
}
