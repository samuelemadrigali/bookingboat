import { Link } from "@inertiajs/react";
import { ChevronDoubleLeft, ChevronDoubleRight } from "react-bootstrap-icons";

export default function Pagination({ links }) {
    return (
        <div className="flex justify-end mt-4">
            <nav aria-label="Page navigation">
                <ul className="pagination-nav flex">
                    {links.map(
                        (link, index) =>
                            link.url && (
                                <li
                                    key={index}
                                    className={`page-item ${
                                        link.active ? "active" : ""
                                    }`}
                                >
                                    <Link
                                        className="flex items-center relative h-full py-3 px-4 bg-white border border-gray-200 hover:bg-indigo-100 hover:text-indigo-500 -mr-0.5 dark:bg-gray-800 dark:border-gray-700"
                                        href={link.url}
                                    >
                                        {index === 0 ? (
                                            <ChevronDoubleLeft />
                                        ) : index === links.length - 1 ? (
                                            <ChevronDoubleRight />
                                        ) : (
                                            link.label
                                        )}
                                    </Link>
                                </li>
                            )
                    )}
                </ul>
            </nav>
        </div>
    );
}
