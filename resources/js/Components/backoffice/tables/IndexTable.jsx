import useLocalization from "@/hooks/useLocalization";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { Button, Modal } from "@/Components/ui";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function IndexTable({ data, columns, actions }) {
    const { t } = useLocalization();
    const { delete: destroy } = useForm();
    const [idToDelete, setIdToDelete] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleOnDeleteClick(id) {
        setIsOpenModal(true);
        setIdToDelete(id);
    }

    function deleteResource() {
        setIsOpenModal(false);
        destroy(actions.destroy(idToDelete));
    }

    return (
        <div className="overflow-auto">
            <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                <thead>
                    <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40">
                        {columns.map((column, index) => (
                            <th className="text-left" key={index}>
                                {column.label}
                            </th>
                        ))}
                        {actions && (
                            <th className="text-end">{t("actions")}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length + 1}
                                className="text-center"
                            >
                                {t("table.no_data")}
                            </td>
                        </tr>
                    ) : (
                        data.map((item, index) => (
                            <tr key={index}>
                                {columns.map((column, index) => (
                                    <td key={index}>{item[column.key]}</td>
                                ))}
                                {actions && (
                                    <td className="space-x-2 text-end">
                                        {actions.edit && (
                                            <Link
                                                href={actions.edit.href(
                                                    item.id
                                                )}
                                            >
                                                <Button
                                                    color="twotone-primary"
                                                    size="small"
                                                >
                                                    <PencilSquare className="inline" />
                                                </Button>
                                            </Link>
                                        )}
                                        {actions.destroy && (
                                            <Button
                                                color="twotone-danger"
                                                size="small"
                                                onClick={() =>
                                                    handleOnDeleteClick(item.id)
                                                }
                                            >
                                                <Trash3 className="inline" />
                                            </Button>
                                        )}
                                    </td>
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <Modal
                isOpen={isOpenModal}
                setIsOpen={setIsOpenModal}
                title="Title of the modals"
            >
                <form onSubmit={deleteResource} className="space-y-4">
                    <p className="text-gray-500 mb-4">
                        Woohoo, you're reading this text in a modal!. Add
                        dialogs to your site for lightboxes, user notifications,
                        or completely custom content.
                    </p>

                    <Button type="submit" color="danger">
                        Elimina
                    </Button>
                </form>
            </Modal>
        </div>
    );
}
