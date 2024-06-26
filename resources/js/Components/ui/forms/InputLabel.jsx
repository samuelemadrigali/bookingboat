import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function InputLabel(props, ref) {
    const shapes = {
        rounded: "rounded",
        square: "rounded-none",
        pill: "rounded-3xl",
        circle: "rounded-full !p-2.5",
    };
    const sizes = {
        small: "py-1 px-2.5 text-sm",
        medium: "py-2 px-4",
        large: "py-3 px-6",
    };
    const addSize = props.size ? sizes[props.size] : "py-2 px-4";
    const addShape = props.shape ? shapes[props.shape] : "rounded";
    const addClass = props.className ? `${props.className} ` : "";
    const addType = props.type ? `${props.type}` : "text";
    const disabled_css = props.disabled
        ? " !bg-gray-200 dark:!bg-gray-900 dark:bg-opacity-50 cursor-not-allowed"
        : "";

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (props.isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div>
            <label htmlFor={props.id} className="inline-block mb-2">
                {props.label}
                {props.required && <span className="text-pink-500"> *</span>}
            </label>
            <input
                ref={input}
                type={addType}
                aria-label={props.label}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                className={`${addClass}w-full leading-5 relative ${addSize} ${addShape} text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600${disabled_css}`}
                disabled={props.disabled}
                readOnly={props.readOnly}
                required={props.required}
                min={props.min}
                max={props.max}
                data-lang={props.lang}
            />
        </div>
    );
});
