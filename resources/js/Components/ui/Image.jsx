export default function Image({ src, alt, className }) {
    return (
        <img
            className={className}
            src={src || "/img/placeholder.webp"}
            alt={alt}
        />
    );
}
