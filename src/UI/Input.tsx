import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  styles?: string;
  inputStyles?: string;
}

export default function Input({
  label,
  inputStyles,
  styles,
  ...props
}: InputProps) {
  const classes = `flex flex-col ${styles ?? ""}`;
  return (
    <div className={classes}>
      <label className="text-blue-950/85">{label}</label>
      <input className={inputStyles ?? ""} {...props} />
    </div>
  );
}
