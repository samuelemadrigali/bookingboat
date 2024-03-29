export default function Column(props) {
    // props ( className )
    const addClass = props.className ? `${props.className}` : "";

    /**
     * Object containing all the possible values for the `span` prop.
     */
    const spans = {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
        5: "col-span-5",
        6: "col-span-6",
        7: "col-span-7",
        8: "col-span-8",
        9: "col-span-9",
        10: "col-span-10",
        11: "col-span-11",
        12: "col-span-12",
    };

    /**
     * Object containing all the possible values for the `spanSm` prop.
     */
    const spansSm = {
        1: "sm:col-span-1",
        2: "sm:col-span-2",
        3: "sm:col-span-3",
        4: "sm:col-span-4",
        5: "sm:col-span-5",
        6: "sm:col-span-6",
        7: "sm:col-span-7",
        8: "sm:col-span-8",
        9: "sm:col-span-9",
        10: "sm:col-span-10",
        11: "sm:col-span-11",
        12: "sm:col-span-12",
    };

    /**
     * Object containing all the possible values for the `spanMd` prop.
     */
    const spansMd = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
        4: "md:col-span-4",
        5: "md:col-span-5",
        6: "md:col-span-6",
        7: "md:col-span-7",
        8: "md:col-span-8",
        9: "md:col-span-9",
        10: "md:col-span-10",
        11: "md:col-span-11",
        12: "md:col-span-12",
    };

    /**
     * Object containing all the possible values for the `spanLg` prop.
     */
    const spansLg = {
        1: "lg:col-span-1",
        2: "lg:col-span-2",
        3: "lg:col-span-3",
        4: "lg:col-span-4",
        5: "lg:col-span-5",
        6: "lg:col-span-6",
        7: "lg:col-span-7",
        8: "lg:col-span-8",
        9: "lg:col-span-9",
        10: "lg:col-span-10",
        11: "lg:col-span-11",
        12: "lg:col-span-12",
    };

    /**
     * Object containing all the possible values for the `spanXl` prop.
     */
    const spansXl = {
        1: "xl:col-span-1",
        2: "xl:col-span-2",
        3: "xl:col-span-3",
        4: "xl:col-span-4",
        5: "xl:col-span-5",
        6: "xl:col-span-6",
        7: "xl:col-span-7",
        8: "xl:col-span-8",
        9: "xl:col-span-9",
        10: "xl:col-span-10",
        11: "xl:col-span-11",
        12: "xl:col-span-12",
    };

    /**
     * Object containing all the possible values for the `span2Xl` prop.
     */
    const spans2Xl = {
        1: "2xl:col-span-1",
        2: "2xl:col-span-2",
        3: "2xl:col-span-3",
        4: "2xl:col-span-4",
        5: "2xl:col-span-5",
        6: "2xl:col-span-6",
        7: "2xl:col-span-7",
        8: "2xl:col-span-8",
        9: "2xl:col-span-9",
        10: "2xl:col-span-10",
        11: "2xl:col-span-11",
        12: "2xl:col-span-12",
    };

    return (
        <div
            className={`${spans[props.spans || 12]} 
            ${props.spansSm ? spansSm[props.spansSm] : ""}
            ${props.spansMd ? spansMd[props.spansMd] : ""}
            ${props.spansLg ? spansLg[props.spansLg] : ""}
            ${props.spansXl ? spansXl[props.spansXl] : ""}
            ${props.spans2Xl ? spans2Xl[props.spans2Xl] : ""}
             ${addClass}`}
        >
            {props.children}
        </div>
    );
}
