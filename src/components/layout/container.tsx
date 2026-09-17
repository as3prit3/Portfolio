import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
	<div
	  className={cn(
		"mx-auto w-full max-w-360 px-6 sm:px-24 lg:px-30 xl:px-52 overflow-hidden",
		className,
	  )}
	  {...props}
	/>
  );
}
