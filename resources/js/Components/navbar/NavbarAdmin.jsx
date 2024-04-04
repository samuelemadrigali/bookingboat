import { useState } from "react";
import {
    Calendar,
    Gear,
    ChatDots,
    HandThumbsUp,
    List,
    FilterLeft,
} from "react-bootstrap-icons";
import { DropdownUser, DropdownNotif, Switch } from "@/Components/ui";

export default function NavbarAdmin(props) {
    // set toggle dark
    const [isDark, setDark] = useState(false);
    // dark mode on
    isDark === true
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");

    // Data notification
    const data_dropdown_notif = [
        {
            id: 1,
            title: "Event will coming",
            msg: "Meeting with Mr.John Navas at:10.00Am",
            time: "2022-06-09T23:50:21.817Z",
            icon: <Calendar />,
            url: "/",
            read: true,
        },
        {
            id: 2,
            title: "Maintenance",
            msg: "Server Maintenance",
            time: "2022-07-09T23:50:21.817Z",
            icon: <Gear />,
            url: "/",
            read: true,
        },
        {
            id: 3,
            title: "Carlos Comment",
            msg: "Carlos Comment in your post",
            time: "2022-07-09T23:50:21.817Z",
            icon: <ChatDots />,
            url: "/",
            read: true,
        },
        {
            id: 4,
            title: "Daniel Comment",
            msg: "Daniel Comment in your post",
            time: "2022-08-09T23:50:21.817Z",
            icon: <ChatDots />,
            url: "/",
            read: false,
        },
        {
            id: 5,
            title: "New Like",
            msg: "Danilo Like your Post",
            time: "2022-09-09T23:50:21.817Z",
            icon: <HandThumbsUp />,
            url: "/",
            read: false,
        },
    ];

    const models = {
        compact: "navtop-compact",
        default: "navtop-area",
    };
    const addmodel = props.model ? models[props.model] : "navtop-area";

    return (
        <nav
            className={`${addmodel} z-50 fixed flex flex-row flex-nowrap items-center justify-between mt-0 py-1 px-6 bg-white dark:bg-gray-800 shadow-sm transition-all duration-500 ease-in-out`}
            id="desktop-menu"
        >
            {/* toggle button */}
            <button
                onClick={props.dataToggle}
                id="navbartoggle"
                type="button"
                className="inline-flex items-center justify-center text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-0"
            >
                <span className="sr-only">Mobile menu</span>
                <List className="sidenav-hidden h-8 w-8" />
                <FilterLeft className="sidenav-block h-8 w-8" />
            </button>

            {/* top menu */}
            <ul className="flex ltr:ml-auto rtl:mr-auto mt-2">
                <li className="relative pr-4">
                    <Switch
                        name="lightdark"
                        value="1"
                        checked={isDark}
                        id="labele"
                        onChange={() => setDark(!isDark)}
                    />
                </li>
                <li className="relative">
                    <DropdownNotif data={data_dropdown_notif} />
                </li>
                <li className="relative">
                    <DropdownUser />
                </li>
            </ul>
        </nav>
    );
}
