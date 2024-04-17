import { Button, ConfirmDelete } from "@/Components/ui";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { usePage, useForm, Link } from "@inertiajs/react";
import { useState } from "react";

export default function TourTableActions({ id }) {
    const { delete: destroy } = useForm();
    const { company } = usePage().props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleOnDelete() {
        destroy(
            route("agency.tours.destroy", { company: company.slug, tour: id })
        );
    }

    return (
        <div className="space-x-2 text-end">
            <Link
                href={route("agency.tours.edit", {
                    company: company.slug,
                    tour: id,
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
