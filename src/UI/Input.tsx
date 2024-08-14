import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  styles?: string;
  inputStyles?: string;
}

export default function Input({
  id,
  label,
  inputStyles,
  styles,
  ...props
}: InputProps) {
  const classes = `flex flex-col ${styles ?? ""}`;
  return (
    <div className={classes}>
      <label htmlFor={id} className="text-blue-950/85 dark:text-zinc-100">
        {label}
      </label>
      <input id={id} className={inputStyles ?? ""} {...props} />
    </div>
  );
}
