import React from "react";

function DashedDivider({ className }) {
  return (
    <div
      className={`border-1  border-dashed border-neutral-500 dark:border-amber-200 ${className}`}
    ></div>
  );
}

export default DashedDivider;
