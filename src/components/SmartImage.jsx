import { useState } from "react";

/**
 * Lazy-loaded image with a mist placeholder that fades in on load.
 * - Appends Squarespace's `?format=` sizing param when missing.
 * - On a null src or load error, renders a branded typographic placeholder
 *   (used for projects that don't have published imagery yet).
 *
 * Props: src, alt, fallback (placeholder text), format (default "1500w").
 */
export default function SmartImage({
  src,
  alt,
  fallback,
  format = "1500w",
  eager = false,
  className = "",
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const finalSrc =
    src && src.includes("squarespace-cdn.com") && !src.includes("?")
      ? `${src}?format=${format}`
      : src;

  if (!src || errored) {
    return (
      <div className="img-placeholder" role="img" aria-label={alt || fallback || "Image"}>
        {fallback && <span>{fallback}</span>}
      </div>
    );
  }

  return (
    <img
      src={finalSrc}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setErrored(true)}
      className={`img-fade ${loaded ? "is-loaded" : ""} ${className}`}
      {...rest}
    />
  );
}
