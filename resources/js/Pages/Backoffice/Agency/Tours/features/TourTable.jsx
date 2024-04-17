import useLocalization from "@/hooks/useLocalization";
import { usePage } from "@inertiajs/react";
import { Table, Badge, Image, Pagination } from "@/Components/ui";
import TourTableActions from "./TourTableActions";

export default function TourTable() {
    const { t } = useLocalization();
    const { tours } = usePage().props;

    const columns = [
        {
            label: t("tours.table.image"),
            key: "image",
        },
        {
            label: t("tours.table.name"),
            key: "name",
        },
        {
            label: t("tours.table.location_from"),
            key: "location_from",
        },
        {
            label: t("tours.table.location_to"),
            key: "location_to",
        },
        {
            label: t("tours.table.start_time"),
            key: "start_time",
        },
        {
            label: t("tours.table.end_time"),
            key: "end_time",
        },
        {
            label: t("tours.table.is_active"),
            key: "is_active",
        },
        {
            label: <div className="text-end">{t("actions")}</div>,
            key: "actions",
        },
    ];

    const data = tours.data.map((tour) => ({
        ...tour,
        name: tour.name?.it,
        description: tour.description?.it,
        image: (
            <Image
                className="h-28 object-cover rounded-md"
                src={tour.image}
                alt={tour.name.it}
            />
        ),
        is_active: (
            <Badge color={tour.is_active ? "success" : "danger"}>
                {tour.is_active ? t("active") : t("inactive")}
            </Badge>
        ),
        actions: <TourTableActions id={tour.id} />,
    }));

    return (
        <>
            <Table columns={columns} data={data} />
            {tours.last_page > 1 && <Pagination links={tours.links} />}
        </>
    );
}
