import { Button, ConfirmDelete } from "@/Components/ui";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { usePage, useForm, Link } from "@inertiajs/react";
import { useState } from "react";

export default function RateCategoryTableActions({ id }) {
    const { delete: destroy } = useForm();
    const { company } = usePage().props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleOnDelete() {
        destroy(
            route("agency.rate-categories.destroy", {
                company: company.slug,
                rateCategory: id,
            })
        );
    }

    return (
        <div className="space-x-2 text-end">
            <Link
                href={route("agency.rate-categories.edit", {
                    company: company.slug,
                    rateCategory: id,
                })}
            >
                <Button color="twotone-primary" size="small">
                    <PencilSquare className="inline" />
                </Button>
            </Link>
            <Button
                color="twotone-danger"
                size="small"
                onClick={() => setIsOpenModal(true)}
            >
                <Trash3 className="inline" />
            </Button>
            <ConfirmDelete
                isOpenModal={isOpenModal}
                setIsOpen={setIsOpenModal}
                onConfirmDelete={handleOnDelete}
            />
        </div>
    );
}
