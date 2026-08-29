"use client"

import React from "react";

export function MorphingButton({ buttonText, onSubmit }: { buttonText?: string; onSubmit?: () => void }) {
  return (
    <button
      onClick={onSubmit}
      className="px-6 py-3 bg-primary text-background rounded-md hover:bg-primary/90 transition-colors"
    >
      {buttonText ?? "Morphing Button"}
    </button>
  );
}
