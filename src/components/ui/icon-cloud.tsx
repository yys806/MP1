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
  const [loadFailed, setLoadFailed] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const primaryUrl =
      "https://unpkg.com/simple-icons@latest/_data/simple-icons.json";
    const fallbackUrl =
      "https://cdn.jsdelivr.net/npm/simple-icons@latest/_data/simple-icons.json";

    const load = async () => {
      try {
        const res = await fetch(primaryUrl);
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
        setLoadFailed(false);
      } catch (err) {
        try {
          const res = await fetch(fallbackUrl);
          if (!res.ok) throw new Error(`fallback simple-icons ${res.status}`);
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
          setLoadFailed(false);
        } catch (e2) {
          console.error("Failed to load simple-icons data", e2);
          setData(null);
          setLoadFailed(true);
        }
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

  const fallbackColor = theme === "light" ? "1f2937" : "e5e7eb"; // hex without #

  if (loadFailed) {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 justify-items-center">
        {iconSlugs.map((slug) => (
          <img
            key={slug}
            src={`https://cdn.simpleicons.org/${slug}/${fallbackColor}`}
            alt={slug}
            className="h-10 w-10"
            loading="lazy"
          />
        ))}
      </div>
    );
  }

  if (!data || !renderedIcons) {
    return <div className="h-32 flex items-center justify-center text-sm text-muted-foreground">Loading icons...</div>
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
