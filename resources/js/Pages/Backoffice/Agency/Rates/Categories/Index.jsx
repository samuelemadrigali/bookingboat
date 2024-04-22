import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card, Button } from "@/Components/ui";
import { PlusLg } from "react-bootstrap-icons";
import { Link } from "@inertiajs/react";
import RateCategoryTable from "./features/RateCategoryTable";

export default function Index({ company }) {
    const { t } = useLocalization();

    return (
        <BackofficeLayout title={t("categories")}>
            <Card className="relative mb-6">
                <div className="mb-3">
                    <Link
                        href={route("agency.rate-categories.create", {
                            company: company.slug,
                        })}
                    >
                        <Button className="mb-4 block sm:inline-block w-full sm:w-auto">
                            {t("rate_categories.create")}
                            <PlusLg className="inline-block ltr:ml-1 rtl:mr-1 bi bi-plus-lg" />
                        </Button>
                    </Link>
                </div>
                <RateCategoryTable />
            </Card>
        </BackofficeLayout>
    );
}
