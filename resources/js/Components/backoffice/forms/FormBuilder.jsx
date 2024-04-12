import { useForm } from "@inertiajs/react";
import FormField from "./FormField";
import { Row, Column, Button } from "@/Components/ui";

export default function FormBuilder({
    fields,
    initialData = null,
    submit: submitData,
}) {
    const { data, setData, submit, errors, transform } = useForm(
        () =>
            initialData ??
            fields
                .map(({ name, initialValue }) => ({ name, initialValue }))
                .reduce(
                    (acc, { name, initialValue }) => ({
                        ...acc,
                        [name]: initialValue ?? "",
                    }),
                    {}
                )
    );

    transform((data) =>
        submitData.transform ? submitData.transform(data) : data
    );

    console.log(data);

    function handleSubmit(e) {
        e.preventDefault();
        submit(submitData.method, submitData.route);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Row>
                {fields.map(({ columnSize, name, ...field }, index) => (
                    <Column key={index} {...columnSize}>
                        <FormField
                            id={name}
                            name={name}
                            value={data[name]}
                            setData={setData}
                            error={errors[name]}
                            {...field}
                        />
                    </Column>
                ))}
            </Row>
            <Button type="submit">{submitData.label}</Button>
        </form>
    );
}
