import { HouseDoor, PSquare, Book } from "react-bootstrap-icons";
import { SubmenuAccordion } from "@/Components/ui";
import Logo from "@/Components/navbar/Logo";
import useLocalization from "@/hooks/useLocalization";
import { usePage } from "@inertiajs/react";

export default function Sidebar({ closeMobile, ...props }) {
    const { company } = usePage().props;

    const { t } = useLocalization();

    const sideitems = [
        {
            id: 1,
            title: t("dashboard"),
            url: route("agency.dashboard", company.slug),
            icon: <HouseDoor />,
        },
        {
            id: 2,
            title: t("fleet"),
            url: route("agency.fleet.index", company.slug),
            icon: <PSquare />,
        },
        {
            id: 3,
            title: t("tour"),
            url: route("agency.tours.index", company.slug),
            icon: <Book />,
        },
    ];
    const models = {
        compact: "sidebar-compact w-0 md:w-20",
        default: "sidebar-area w-64",
    };
    const colors = {
        dark: "dark",
        light: "light",
    };
    const addmodel = props.model ? models[props.model] : "sidebar-area w-64";
    const addcolor = props.color ? colors[props.color] : "";
    const addClass = props.className ? `${props.className} ` : "";

    return (
        <nav
            id="sidebar-menu"
            className={`${addClass}fixed ${addmodel} ${addcolor} transition-all duration-500 ease-in-out h-screen shadow-sm`}
        >
            <div className="h-full bg-white dark:bg-gray-800 overflow-y-auto scrollbars">
                <div className="mh-18 text-center py-5">
                    <Logo className="px-4 max-h-9 overflow-hidden hidden-compact justify-center" />
                </div>

                {/* sidebar menu */}
                <ul
                    id="side-menu"
                    className="w-full float-none flex flex-col font-medium ltr:pl-1.5 rtl:pr-1.5"
                >
                    <SubmenuAccordion
                        data={sideitems}
                        closeMobile={closeMobile}
                    />
                </ul>
            </div>
        </nav>
    );
}
