import Select from "react-select";

export default function DataSelect(props) {
    return (
        <>
            <label htmlFor={props.id} className="inline-block mb-2">
                {props.label}
            </label>
            <Select {...props} />
        </>
    );
}
