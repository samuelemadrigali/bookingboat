import ReactCountryFlag from "react-country-flag";

export default function Flag({ lang, className, size }) {
    const flagSize = size ? size : 22;
    const code = lang === "en" ? "gb" : lang;

    return (
        <ReactCountryFlag
            countryCode={code}
            svg
            style={{
                width: flagSize,
                height: flagSize,
            }}
            className={`${className}`}
        />
    );
}
