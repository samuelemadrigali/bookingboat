import { Modal, Button } from "@/Components/ui";
import useLocalization from "@/hooks/useLocalization";

export default function ConfirmDelete({
    isOpenModal,
    setIsOpen,
    onConfirmDelete,
}) {
    const { t } = useLocalization();

    return (
        <Modal
            isOpen={isOpenModal}
            setIsOpen={setIsOpen}
            title={t("confirmDelete.title")}
        >
            <div className="space-y-4">
                <p className="text-gray-500 mb-4">{t("confirmDelete.text")}</p>

                <div className="flex gap-x-4">
                    <Button
                        type="button"
                        color="danger"
                        onClick={() => onConfirmDelete()}
                    >
                        {t("confirmDelete.delete")}
                    </Button>
                    <Button
                        type="button"
                        color="light"
                        onClick={() => setIsOpen(false)}
                    >
                        {t("confirmDelete.cancel")}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
