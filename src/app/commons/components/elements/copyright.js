import React from "react";

export default function Copyright() {
  return (
    <div className="text-neutral-600 text-sm px-3">
      <div className="animate-pulse cursor-pointer">
        <span>jhagovind348@gmail.com</span>
      </div>
      <img
        src="/signature.png"
        alt="Signature"
        className="hidden md:block md:w-[800px] md:h-[60px] filter brightness-50" // Show only on medium and larger screens
      />
    </div>
  );
}
