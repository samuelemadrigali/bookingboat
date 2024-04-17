import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card } from "@/Components/ui";
import FleetForm from "./features/FleetForm";

export default function Edit() {
    const { t } = useLocalization();

    return (
        <BackofficeLayout title={t("fleets.edit")}>
            <Card className="relative mb-6">
                <FleetForm />
            </Card>
        </BackofficeLayout>
    );
}
