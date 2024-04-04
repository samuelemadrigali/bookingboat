import { useState } from "react";
// components
import Sidebar from "@/Components/sidebar/Sidebar";
import NavbarAdmin from "@/Components/navbar/NavbarAdmin";
import FooterAdmin from "@/Components/footer/FooterAdmin";

export default function BackofficeLayout({ children }) {
    // set toggle
    const [isToggle, setToggle] = useState(false);
    // close sidebar menu if screen < 768
    const closeToggle = () => {
        setToggle(false);
    };
    const closeMobile = () => {
        if (window.innerWidth < 768) {
            closeToggle();
        }
    };

    return (
        <div
            id="wrapper"
            className={`wrapper overflow-x-hidden bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40 ${
                isToggle ? "show" : ""
            }`}
        >
            {/* sidebar area */}
            <Sidebar closeMobile={closeMobile} />

            {/* content area */}
            <div className="content-area relative min-h-screen flex flex-col transition-all duration-500 ease-in-out">
                {/* navbar top */}
                <NavbarAdmin dataToggle={() => setToggle(!isToggle)} />

                {/* main */}
                <main className="relative pt-20 pb-32 sm:pb-24 lg:pb-20 -mt-2">
                    <div className="mx-auto py-2 sm:px-2">{children}</div>
                </main>

                {/* footer */}
                <FooterAdmin />
            </div>
        </div>
    );
}
