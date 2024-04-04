import { Link } from "@inertiajs/react";
import useLocalization from "@/hooks/useLocalization";
import { Translate } from "react-bootstrap-icons";

export default function FooterAdmin() {
    const { locale } = useLocalization();

    const footeritems = [
        { title: "Support", url: "/" },
        { title: "Help Center", url: "/" },
        { title: "Privacy", url: "/" },
    ];
    footeritems.push({
        title: locale === "en" ? "Italiano" : "English",
        url: route("switch-locale", { locale: locale === "en" ? "it" : "en" }),
        icon: <Translate />,
    });

    const footer_copyright = "Booking Boat tours | All right reserved";

    return (
        <footer className="absolute left-0 right-0 bottom-0 bg-white dark:bg-gray-800 p-6 shadow-sm">
            <div className="mx-auto">
                <div className="flex flex-wrap flex-row -mx-4">
                    <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 text-center lg:ltr:text-left lg:rtl:text-right">
                        <ul className="ltr:pl-0 rtl:pr-0">
                            {footeritems.map((footeritem, index) => (
                                <li
                                    key={index}
                                    className="inline-block ltr:mr-3 rtl:ml-3"
                                >
                                    <Link
                                        to={footeritem.url}
                                        className="hover:text-indigo-500"
                                    >
                                        {footeritem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 text-center lg:ltr:text-right lg:rtl:text-left">
                        <p className="mb-0 mt-3 lg:mt-0">{footer_copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
