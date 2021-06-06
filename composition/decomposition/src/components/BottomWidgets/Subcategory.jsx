import React from 'react'

export default function Subcategory({subcategory}) {
  if (!subcategory) return null;
  return (
    <>
      <span className="subcategory">{subcategory}</span>
    </>
  );
}
