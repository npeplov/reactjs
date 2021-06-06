import React from "react";

export default function Channel({ channel }) {
  if (!channel) return null;
  return (
    <>
      <span className="Channel">{channel}</span>
    </>
  );
}
