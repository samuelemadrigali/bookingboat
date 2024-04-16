import useLocalization from "@/hooks/useLocalization";
import { usePage } from "@inertiajs/react";
import { Table, Badge, Image } from "@/Components/ui";
import FleetTableActions from "./FleetTableActions";

export default function FleetTable() {
    const { t } = useLocalization();
    const { fleets } = usePage().props;

    const columns = [
        {
            label: t("fleet.fields.image"),
            key: "image",
        },
        {
            label: t("fleet.fields.name"),
            key: "name",
        },
        {
            label: t("fleet.fields.capacity"),
            key: "capacity",
        },
        {
            label: t("fleet.fields.status"),
            key: "status",
        },
        {
            label: <div className="text-end">{t("actions")}</div>,
            key: "actions",
        },
    ];

    const data = fleets.data.map((fleet) => ({
        ...fleet,
        name: fleet.name.it,
        description: fleet.description.it,
        image: (
            <Image
                className="h-28 object-cover rounded-md"
                src={fleet.image}
                alt={fleet.name.it}
            />
        ),
        status: (
            <Badge color={fleet.status ? "success" : "danger"}>
                {fleet.status ? t("active") : t("inactive")}
            </Badge>
        ),
        actions: <FleetTableActions id={fleet.id} />,
    }));

    return <Table columns={columns} data={data} />;
}
