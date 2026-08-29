import React from "react";

export default function Checkbox16() {
  return (
    <div className="flex items-center space-x-2 p-2">
      <input type="checkbox" id="checkbox16" className="w-5 h-5 accent-primary" />
      <label htmlFor="checkbox16" className="text-sm font-medium text-gray-300">
        Checkbox 16
      </label>
    </div>
  );
}
