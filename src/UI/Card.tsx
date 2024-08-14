import { ReactNode } from "react";

export default function Card({
  children,
  classeName,
}: {
  children: ReactNode;
  classeName: string;
}) {
  const styles = "rounded-2xl p-2  shadow-lg shadow-gray-300 " + classeName;
  return <div className={styles}>{children}</div>;
}
