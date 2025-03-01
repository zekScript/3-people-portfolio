import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { Link } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        style={{
          color: "white",
          fontSize: "48px",
          marginTop: " 1rem ",
          fontFamily: "sans-serif",
        }}
        id={children}
      >
        {children}
        <Separator />
      </h1>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: "24px", marginTop: "2rem" }}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: "white",
          fontSize: "32px",
          fontWeight: "bold",
          margin: "2rem",
        }}
      >
        {children}
      </h2>
    ),
    ul: ({ children }) => (
      <ul style={{ listStyleType: "circle", marginTop: "2rem" }}>{children}</ul>
    ),
    a: ({ children, ...props }) => (
      <a
        style={{
          color: "#1a83be",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        {...props}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
