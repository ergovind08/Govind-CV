import React from "react";

function DashedDivider({ className }) {
  return (
    <div
      className={`border border-x-transparent  border-neutral-500 dark:border-neutral-600 ${className}`}
    ></div>
  );
}

export default DashedDivider;
