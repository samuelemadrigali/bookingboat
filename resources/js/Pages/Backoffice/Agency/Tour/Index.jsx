import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card, Button, Badge } from "@/Components/ui";
import { PlusLg } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import IndexTable from "@/Components/backoffice/tables/IndexTable";

export default function Index({ company, tours }) {
    const { t } = useLocalization();

    const tableHeader = [
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
    ];

    const data = tours.data.map((tour) => ({
        ...tour,
        image: (
            <img
                className=" h-28 object-cover rounded-md"
                src={tour.image || "/img/placeholder.webp"}
                alt={tour.name}
            />
        ),
        is_active: (
            <Badge color={tour.is_active ? "success" : "danger"}>
                {tour.is_active ? t("active") : t("inactive")}
            </Badge>
        ),
    }));

    const actions = {
        edit: {
            href: (id) => {
                return route("agency.tours.edit", {
                    company: company.slug,
                    tour: id,
                });
            },
        },
        destroy: (idToDelete) => {
            return route("agency.tours.destroy", {
                company: company.slug,
                tour: idToDelete,
            });
        },
    };

    return (
        <BackofficeLayout title={t("tours")}>
            <Card className="relative mb-6">
                <div className="mb-3">
                    <Link
                        href={route("agency.tours.create", {
                            company: company.slug,
                        })}
                    >
                        <Button className="mb-4 block sm:inline-block w-full sm:w-auto">
                            {t("tours.create")}
                            <PlusLg className="inline-block ltr:ml-1 rtl:mr-1 bi bi-plus-lg" />
                        </Button>
                    </Link>
                </div>
                <IndexTable
                    columns={tableHeader}
                    data={data}
                    actions={actions}
                />
            </Card>
        </BackofficeLayout>
    );
}
