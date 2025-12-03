"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useEffect, useState } from "react";

export function Progress({ value }: { value: number }) {
  const [internal, setInternal] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setInternal(value), 80);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      value={internal}
      className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
      <ProgressPrimitive.Indicator
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${internal}%` }}
      />
    </ProgressPrimitive.Root>
  );
}
