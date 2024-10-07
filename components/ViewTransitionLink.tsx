"use client";

import Link, { type LinkProps } from "next/link";

export type ViewTransitionLinkProps = React.HTMLAttributes<HTMLAnchorElement> & LinkProps;

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
