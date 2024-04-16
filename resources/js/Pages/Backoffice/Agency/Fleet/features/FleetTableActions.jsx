import { Button, ConfirmDelete } from "@/Components/ui";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { usePage, useForm, Link } from "@inertiajs/react";
import { useState } from "react";

export default function FleetTableActions({ id }) {
    const { delete: destroy } = useForm();
    const { company } = usePage().props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleOnDelete() {
        alert("Delete");
        // destroy(
        //     route("agency.fleet.destroy", { company: company.slug, fleet: id })
        // );
    }

    return (
        <div className="space-x-2 text-end">
            <Link
                href={route("agency.fleet.edit", {
                    company: company.slug,
                    fleet: id,
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
