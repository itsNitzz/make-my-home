import { ReactNode } from "react";

export default function Button({
  styles,
  children,
  ...props
}: {
  styles?: string;
  children: ReactNode;
  [s: string]: unknown;
}) {
  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
}
