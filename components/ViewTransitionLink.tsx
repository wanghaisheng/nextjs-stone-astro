"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";

export type ViewTransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export default function ViewTransitionLink({
  onClick: handleClick,
  ...props
}: ViewTransitionLinkProps) {
  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!document?.startViewTransition) return handleClick?.(e);

    document?.startViewTransition(() => {
      handleClick?.(e);
    });
  };

  return <Link {...props} onClick={handleTransition} />;
}
