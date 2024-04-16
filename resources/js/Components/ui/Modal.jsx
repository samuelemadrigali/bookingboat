import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XCircleFill } from "react-bootstrap-icons";

export default function Modal({ isOpen, setIsOpen, ...props }) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="z-50 relative p-3 mx-auto my-0 max-w-600 mt-12">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="min-w-500 bg-white rounded shadow-lg border flex flex-col overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                                <div className="relative">
                                    <Dialog.Title
                                        as="h3"
                                        className="px-6 py-3 text-xl border-b dark:border-gray-700 font-bold"
                                    >
                                        {props.title ? props.title : ""}
                                    </Dialog.Title>
                                    <button
                                        onClick={closeModal}
                                        className="fill-current absolute ltr:right-0 rtl:left-0 top-0 m-3 text-2xl"
                                    >
                                        <XCircleFill />
                                    </button>
                                </div>
                                {/* modal content */}
                                <div className="px-6 py-3">
                                    {props.children ? props.children : ""}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
