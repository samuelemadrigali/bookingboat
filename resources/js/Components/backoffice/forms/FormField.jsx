import {
    Uploader,
    Textarea,
    Switch,
    InputLabel,
    InputError,
} from "@/Components/ui";

const inputTypes = {
    textarea: Textarea,
    uploader: Uploader,
    switch: Switch,
};

export default function FormField({ setData, error, value, ...props }) {
    function handleChange(e) {
        setData(e.target.name, e.target.value);
    }

    const FieldComponent = inputTypes[props.type] || InputLabel;

    if (props.type === "switch") {
        return (
            <>
                <FieldComponent
                    checked={value}
                    onChange={() => setData(props.name, !value)}
                    {...props}
                />
                <InputError message={error} />
            </>
        );
    }

    if (props.type === "uploader") {
        function handleChange(files) {
            setData(props.name, files[0] || null);
        }
        return (
            <>
                <FieldComponent
                    onChange={handleChange}
                    uploadedImage={value}
                    {...props}
                />
                <InputError message={error} />
            </>
        );
    }

    return (
        <>
            <FieldComponent onChange={handleChange} value={value} {...props} />
            <InputError message={error} />
        </>
    );
}
