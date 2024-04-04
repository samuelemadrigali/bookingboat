import { Link, usePage } from "@inertiajs/react";
import { Menu, Transition } from "@headlessui/react";
import {
    PersonFill,
    Gear,
    QuestionCircle,
    Translate,
    BoxArrowRight,
} from "react-bootstrap-icons";
import useLocalization from "@/hooks/useLocalization";

export default function DropdownUser() {
    const { t, locale } = useLocalization();
    const {
        auth: { user },
    } = usePage().props;

    // list dropdown
    const menu = [
        { title: "Setting Privacy", url: "/", icon: <Gear /> },
        { title: "Help Support", url: "/", icon: <QuestionCircle /> },
        {
            title: locale === "en" ? "Italiano" : "English",
            url: route("switch-locale", {
                locale: locale === "en" ? "it" : "en",
            }),
            icon: <Translate />,
        },
        {
            title: t("logout"),
            url: route("logout"),
            method: "post",
            icon: <BoxArrowRight />,
        },
    ];

    return (
        <Menu>
            <Menu.Button
                className="px-3 flex text-sm rounded-full focus:outline-none"
                id="user-menu-button"
            >
                <div className="relative">
                    {user.img ? (
                        <img
                            className="h-10 w-10 rounded-full border border-gray-700 bg-gray-700"
                            src={user.img}
                            alt={user.name}
                        />
                    ) : (
                        <div className="h-10 w-10 rounded-full border border-gray-700 bg-gray-700 flex items-center justify-center text-gray-500">
                            <PersonFill className="h-8 w-8" />
                        </div>
                    )}
                </div>
                <span className="hidden md:block ltr:ml-1 rtl:mr-1 self-center">
                    {user.name}
                </span>
            </Menu.Button>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    as="ul"
                    className="origin-top-right min-w-12 absolute ltr:right-0 rtl:left-0 rounded top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-md"
                >
                    {menu.map((menuitem, index) => (
                        <li key={index}>
                            <Link
                                href={menuitem.url}
                                method={menuitem.method}
                                className="flex items-center w-full py-2 px-6 clear-both whitespace-nowrap hover:text-indigo-500"
                            >
                                <span className="ltr:mr-2 rtl:ml-2 w-4 h-4 bi bi-gear">
                                    {menuitem.icon}
                                </span>
                                {menuitem.title}
                            </Link>
                        </li>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
