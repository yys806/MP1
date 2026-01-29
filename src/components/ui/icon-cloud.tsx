"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { Cloud, ICloud } from "react-icon-cloud";
import { simpleIconsSubset } from "@/lib/simple-icons-subset";

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
    const mapped = iconSlugs
      .map((slug) => simpleIconsSubset[slug])
      .filter(Boolean)
      .map((icon) => {
        const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title><path fill="#${color}" d="${icon.path}"/></svg>`;
        const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
        return (
          <img
            key={icon.slug}
            src={dataUrl}
            alt={icon.title}
            loading="lazy"
            className="h-10 w-10"
          />
        );
      });
    return mapped;
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
