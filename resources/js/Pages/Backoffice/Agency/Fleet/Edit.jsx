import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card } from "@/Components/ui";
import Form from "./Form";

export default function Edit() {
    const { t } = useLocalization();

    return (
        <BackofficeLayout title={t("fleet.edit")}>
            <Card className="relative mb-6">
                <Form action="edit" />
            </Card>
        </BackofficeLayout>
    );
}
