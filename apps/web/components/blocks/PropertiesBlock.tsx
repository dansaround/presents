"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import type { PropertiesBlock as PropertiesBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";
import { cn } from "@/lib/utils";

export function PropertiesBlock({ block }: BlockComponentProps<PropertiesBlockType>) {
  const { title, items } = block;

  if (!items || items.length === 0) return null;

  return (
    <div className="py-4">
      {title && (
        <h2 className="px-4 mb-4 text-xl font-semibold text-foreground">
          {title}
        </h2>
      )}

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
        {items.map((property, index) => (
          <Link
            key={property.id || index}
            href={property.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 w-[280px] snap-start"
          >
            <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:border-profile-primary/50">
              {/* Property Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {property.image?.url ? (
                  <Image
                    src={property.image.url}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Sin imagen</span>
                  </div>
                )}

                {/* Type Badge */}
                <div
                  className={cn(
                    "absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-semibold uppercase",
                    property.type === "Venta"
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 text-white"
                  )}
                >
                  {property.type}
                </div>
              </div>

              {/* Property Info */}
              <div className="p-3 space-y-2">
                {/* Location */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{property.location}</span>
                </div>

                {/* Title */}
                <h3 className="font-medium text-sm text-foreground line-clamp-2 min-h-[2.5rem]">
                  {property.title}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    {property.priceUsd && (
                      <p className="text-base font-bold text-foreground">
                        {property.priceUsd}
                      </p>
                    )}
                    {property.priceSol && (
                      <p className="text-xs text-muted-foreground">
                        {property.priceSol}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-profile-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
