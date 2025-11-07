import Link from "next/link";
import Script from "next/script";

/**
 * Breadcrumb navigation component with structured data for SEO
 * Provides clear navigation path and helps search engines understand site structure
 */
export default function Breadcrumbs({ items }) {
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://x1nx3r.dev${item.href}` : undefined
    }))
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav aria-label="Breadcrumb" className="newspaper-text text-xs uppercase tracking-[0.2em] text-gray-600">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {item.href ? (
                <Link 
                  href={item.href}
                  className="hover:text-black transition-colors newspaper-smallcaps"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="newspaper-smallcaps text-gray-800" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}