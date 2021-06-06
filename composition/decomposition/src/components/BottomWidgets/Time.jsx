import React from "react";

export default function Time({ time }) {
  if (!time) return null;
  return (
    <>
      <span className="Time">{time}</span>
    </>
  );
}
