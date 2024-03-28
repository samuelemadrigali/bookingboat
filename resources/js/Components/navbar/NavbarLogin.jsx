import { Link, usePage } from "@inertiajs/react";
import { useMemo } from "react";
import Logo from "@/Components/navbar/Logo";

export default function NavbarLogin() {
    const {
        auth: { user },
    } = usePage().props;

    const menu = useMemo(() => {
        if (!user) {
            return [
                { title: "Login", url: route("login") },
                { title: "Register", url: route("register") },
            ];
        }
        return [{ title: "Logout", url: route("logout"), method: "post" }];
    }, [user]);

    return (
        <header className="border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-800">
            <div className="container mx-auto xl:max-w-6xl ">
                <nav
                    className="flex flex-row flex-nowrap items-center justify-between mt-0 py-4 px-6"
                    id="desktop-menu"
                >
                    <Logo />

                    <ul className="flex ltr:ml-auto rtl:mr-auto mt-2">
                        {menu.map((list, index) => (
                            <li key={index} className="relative">
                                <Link
                                    className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
                                    href={list.url}
                                    method={list.method}
                                >
                                    {list.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
