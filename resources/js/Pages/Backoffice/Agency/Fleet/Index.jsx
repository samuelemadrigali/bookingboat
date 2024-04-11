import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card, Button, Badge } from "@/Components/ui";
import { PlusLg } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import IndexTable from "@/Components/backoffice/tables/IndexTable";

export default function Index({ company, fleets }) {
    const { t } = useLocalization();

    const tableHeader = [
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
    ];

    const data = fleets.data.map((fleet) => ({
        ...fleet,
        image: (
            <img
                className=" h-28 object-cover rounded-md"
                src={fleet.image || "/img/placeholder.webp"}
                alt={fleet.name}
            />
        ),
        status: (
            <Badge color={fleet.status ? "success" : "danger"}>
                {fleet.status ? t("active") : t("inactive")}
            </Badge>
        ),
    }));

    const actions = {
        edit: {
            href: (id) => {
                return route("agency.fleet.edit", {
                    company: company.slug,
                    fleet: id,
                });
            },
        },
        destroy: (idToDelete) => {
            return route("agency.fleet.destroy", {
                company: company.slug,
                fleet: idToDelete,
            });
        },
    };

    return (
        <BackofficeLayout title={t("fleet")}>
            <Card className="relative mb-6">
                <div className="mb-3">
                    <Link
                        href={route("agency.fleet.create", {
                            company: company.slug,
                        })}
                    >
                        <Button className="mb-4 block sm:inline-block w-full sm:w-auto">
                            {t("fleet.create")}
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
