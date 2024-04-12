import BackofficeLayout from "@/Layouts/BackofficeLayout";
import useLocalization from "@/hooks/useLocalization";
import { Card } from "@/Components/ui";
import Form from "./Form";

export default function Create() {
    const { t } = useLocalization();

    return (
        <BackofficeLayout title={t("tours.create")}>
            <Card className="relative mb-6">
                <Form action="create" />
            </Card>
        </BackofficeLayout>
    );
}
