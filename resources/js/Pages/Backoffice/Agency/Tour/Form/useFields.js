import useLocalization from "@/hooks/useLocalization";
import { usePage } from "@inertiajs/react";

export default function useFields() {
    const { t } = useLocalization();
    const { fleets } = usePage().props;

    const fleetOptions = fleets.map((fleet) => ({
        value: fleet.id,
        label: fleet.name,
    }));

    const fields = [
        {
            type: "text",
            name: "name",
            label: t("tours.fields.name"),
            required: true,
        },
        {
            type: "uploader",
            name: "image",
            label: t("tours.fields.image"),
            variant: "single",
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "textarea",
            name: "description",
            label: t("tours.fields.description"),
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "number",
            name: "max_passenger",
            label: t("tours.fields.max_passenger"),
            initialValue: 1,
            required: true,
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "switch",
            name: "is_active",
            label: t("tours.fields.is_active"),
            initialValue: true,
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "text",
            name: "location_from",
            label: t("tours.fields.location_from"),
            required: true,
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "text",
            name: "location_to",
            label: t("tours.fields.location_to"),
            required: true,
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "time",
            name: "start_time",
            label: t("tours.fields.start_time"),
            required: true,
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "time",
            name: "end_time",
            label: t("tours.fields.end_time"),
            required: true,
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "select",
            name: "fleets",
            label: t("tours.fields.fleets"),
            required: true,
            isMulti: true,
            options: fleetOptions,
        },
    ];

    return fields;
}
