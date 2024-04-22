import useLocalization from "@/hooks/useLocalization";
import { usePage } from "@inertiajs/react";
import { Table, Badge, Pagination } from "@/Components/ui";
import RateCategoryTableActions from "./RateCategoryTableActions";

export default function RateCategoryTable() {
    const { t } = useLocalization();
    const { rateCategories } = usePage().props;

    const columns = [
        {
            label: t("rate_categories.table.name"),
            key: "name",
        },
        {
            label: t("rate_categories.table.min_age"),
            key: "min_age",
        },
        {
            label: t("rate_categories.table.max_age"),
            key: "max_age",
        },
        {
            label: t("rate_categories.table.is_free"),
            key: "is_free",
        },
        {
            label: <div className="text-end">{t("actions")}</div>,
            key: "actions",
        },
    ];

    const data = rateCategories.data.map((rateCategory) => ({
        ...rateCategory,
        name: rateCategory.name?.it,
        is_free: (
            <Badge color={rateCategory.is_free ? "success" : "danger"}>
                {rateCategory.is_free ? t("yes") : t("no")}
            </Badge>
        ),
        actions: <RateCategoryTableActions id={rateCategory.id} />,
    }));

    return (
        <>
            <Table columns={columns} data={data} />
            {rateCategories.last_page > 1 && (
                <Pagination links={rateCategories.links} />
            )}
        </>
    );
}
