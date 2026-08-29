"use client"

import React from "react";

export function KnobSlider({ value = 0, onChange, min = 0, max = 100, size = 200 }: { value?: number; onChange?: (val: number) => void; min?: number; max?: number; size?: number }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value);
    onChange && onChange(newVal);
  };
  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        style={{ width: size }}
      />
      <span className="mt-2 text-sm text-gray-400">{value}</span>
    </div>
  );
}
