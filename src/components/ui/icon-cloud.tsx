"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, ICloud } from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 1,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const { resolvedTheme } = useTheme();

  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const docEl = document.documentElement;
    const body = document.body;
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");

    const compute = () => {
      // 1) explicit class / data-theme
      if (docEl.classList.contains("dark")) return true;
      if (docEl.dataset.theme === "dark") return true;
      if (docEl.dataset.theme === "light") return false;
      // 2) resolvedTheme from next-themes
      if (resolvedTheme === "dark") return true;
      if (resolvedTheme === "light") return false;
      // 3) background luminance fallback
      const color = getComputedStyle(body).backgroundColor || getComputedStyle(docEl).backgroundColor;
      const m = color.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
      if (m) {
        const [r, g, b] = m.slice(1).map(Number);
        const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        if (lum < 0.5) return true;
      }
      // 4) prefers-color-scheme
      if (mq?.matches) return true;
      return false;
    };

    setIsDark(compute());

    const listener = () => setIsDark(compute());
    mq?.addEventListener?.("change", listener);
    return () => mq?.removeEventListener?.("change", listener);
  }, [resolvedTheme]);

  const icons = useMemo(() => {
    const filter = isDark
      ? "invert(1) brightness(2.5) contrast(1.3)"
      : "invert(0) brightness(0.1) contrast(1)";
    return iconSlugs.map((slug) => {
      const url = `/icons/${slug}.svg`;
      return (
        <a
          key={slug}
          href="#"
          aria-label={slug}
          className="inline-flex"
          onClick={(e) => e.preventDefault()}
        >
          <img
            src={url}
            alt={slug}
            loading="lazy"
            className="h-8 w-8 transition-[filter]"
            style={{
              filter,
              WebkitFilter: filter,
              opacity: isDark ? 1 : 0.9,
              color: isDark ? "#fff" : "#000",
              mixBlendMode: isDark ? "screen" : "normal",
            }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.style.display = "none";
            }}
          />
        </a>
      );
    });
  }, [iconSlugs, isDark]);

  if (icons.length === 0) {
    return <div className="h-32 flex items-center justify-center text-sm text-muted-foreground">No icons</div>;
  }

  return (
    <div
      className="transition-[filter]"
      style={{ filter: isDark ? "invert(1) brightness(2.2) contrast(1.2)" : "none" }}
    >
      {/* @ts-ignore */}
      <Cloud key={isDark ? "cloud-dark" : "cloud-light"} {...cloudProps}>
        <>{icons}</>
      </Cloud>
    </div>
  );
}
