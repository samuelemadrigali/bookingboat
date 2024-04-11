import useLocalization from "@/hooks/useLocalization";

export default function useFields() {
    const { t } = useLocalization();

    const fields = [
        {
            type: "text",
            name: "name",
            label: t("fleet.fields.name"),
            required: true,
        },
        {
            type: "uploader",
            name: "image",
            label: t("fleet.fields.image"),
            variant: "single",
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "textarea",
            name: "description",
            label: t("fleet.fields.description"),
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "number",
            name: "capacity",
            label: t("fleet.fields.capacity"),
            initialValue: 1,
            required: true,
            columnSize: {
                spansSm: 6,
            },
        },
        {
            type: "switch",
            name: "status",
            label: t("fleet.fields.status"),
            initialValue: true,
            columnSize: {
                spansSm: 6,
            },
        },
    ];

    return fields;
}
