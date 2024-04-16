import useLocalization from "@/hooks/useLocalization";
import { usePage } from "@inertiajs/react";
import { Table, Badge, Image, Pagination } from "@/Components/ui";
import FleetTableActions from "./FleetTableActions";

export default function FleetTable() {
    const { t } = useLocalization();
    const { fleets } = usePage().props;
    console.log(fleets);
    const columns = [
        {
            label: t("fleets.fields.image"),
            key: "image",
        },
        {
            label: t("fleets.fields.name"),
            key: "name",
        },
        {
            label: t("fleets.fields.capacity"),
            key: "capacity",
        },
        {
            label: t("fleets.fields.is_active"),
            key: "is_active",
        },
        {
            label: <div className="text-end">{t("actions")}</div>,
            key: "actions",
        },
    ];

    const data = fleets.data.map((fleet) => ({
        ...fleet,
        name: fleet.name?.it,
        description: fleet.description?.it,
        image: (
            <Image
                className="h-28 object-cover rounded-md"
                src={fleet.image}
                alt={fleet.name.it}
            />
        ),
        is_active: (
            <Badge color={fleet.is_active ? "success" : "danger"}>
                {fleet.is_active ? t("active") : t("inactive")}
            </Badge>
        ),
        actions: <FleetTableActions id={fleet.id} />,
    }));

    return (
        <>
            <Table columns={columns} data={data} />
            {fleets.last_page > 1 && <Pagination links={fleets.links} />}
        </>
    );
}
