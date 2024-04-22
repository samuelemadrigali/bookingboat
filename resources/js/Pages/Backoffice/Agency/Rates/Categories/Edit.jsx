import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card } from "@/Components/ui";
import RateCategoryForm from "./features/RateCategoryForm";

export default function Edit() {
    const { t } = useLocalization();

    return (
        <BackofficeLayout title={t("rate_categories.edit")}>
            <Card className="relative mb-6">
                <RateCategoryForm />
            </Card>
        </BackofficeLayout>
    );
}
