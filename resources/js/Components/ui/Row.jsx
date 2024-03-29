export default function Row(props) {
    const addClass = props.className ? `${props.className}` : "";

    return (
        <div className={`grid gap-4 grid-cols-12 ${addClass}`}>
            {props.children}
        </div>
    );
}
