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
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const { theme } = useTheme();
  const color = theme === "light" ? "1f2937" : "e5e7eb";

  const icons = useMemo(() => {
    return iconSlugs.map((slug) => {
      const url = `/icons/${slug}.svg`;
      return (
        <img
          key={slug}
          src={url}
          alt={slug}
          loading="lazy"
          className="h-10 w-10"
          style={{ filter: theme === "dark" ? "invert(0)" : "invert(0.1)" }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = "none";
          }}
        />
      );
    });
  }, [iconSlugs, color]);

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
