"use client";

import { useMemo } from "react";
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
  const { theme } = useTheme();
  const isDark = (theme || "light") === "dark";

  const icons = useMemo(() => {
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
            className="h-8 w-8"
            style={{ filter: isDark ? "invert(1) brightness(1.8)" : "invert(0) brightness(0.05)" }}
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
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{icons}</>
    </Cloud>
  );
}
