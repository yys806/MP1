"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

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

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  // Use transparent background and stronger fallback color so logos stay visible on light theme.
  const bgHex = "transparent";
  const fallbackHex = theme === "light" ? "#1f2937" : "#f8fafc"; // slate-800 vs almost-white
  const minContrastRatio = theme === "dark" ? 2 : 2.5;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = {
  simpleIcons: Record<string, SimpleIcon>;
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const dataUrl =
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/_data/simple-icons.json";

    const load = async () => {
      try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error(`fetch simple-icons ${res.status}`);
        const json = (await res.json()) as { icons: Array<{
          title: string;
          slug: string;
          hex: string;
          path: string;
        }> };
        const mapped: Record<string, SimpleIcon> = {};
        json.icons.forEach((icon) => {
          if (iconSlugs.includes(icon.slug)) {
            mapped[icon.slug] = {
              title: icon.title,
              slug: icon.slug,
              hex: icon.hex,
              path: icon.path,
            };
          }
        });
        setData({ simpleIcons: mapped });
      } catch (err) {
        console.error("Failed to load simple-icons data", err);
        setData(null);
      }
    };

    load();
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
