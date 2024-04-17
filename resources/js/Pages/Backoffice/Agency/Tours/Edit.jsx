import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card } from "@/Components/ui";
import TourForm from "./features/TourForm";

export default function Edit() {
    const { t } = useLocalization();

    return (
        <BackofficeLayout title={t("tours.edit")}>
            <Card className="relative mb-6">
                <TourForm />
            </Card>
        </BackofficeLayout>
    );
}
