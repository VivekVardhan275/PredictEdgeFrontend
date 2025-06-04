
"use client";

import { useState, useEffect } from 'react';

export function CopyrightYear() {
  const [year, setYear] = useState<string | number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    // Fallback while waiting for client-side hydration
    return <>...</>; 
  }

  return <>{year}</>;
}
