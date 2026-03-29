import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-foreground mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 text-muted-foreground mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1 text-muted-foreground">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 text-left font-semibold bg-muted">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">{children}</td>
    ),
    ...components,
  };
}
