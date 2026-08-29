"use client"

import React from "react";

export function CarouselSlider({ slides }: { slides?: any[] }) {
  return (
    <div className="p-4 border border-dashed border-gray-400 rounded-md text-center text-gray-400">
      Carousel Slider placeholder ({slides?.length ?? 0} slides)
    </div>
  );
}
