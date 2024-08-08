import { InputHTMLAttributes } from "react";

interface DropdownType extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  filterOptions: string[];
  styles?: string;
}

export default function Dropdown({
  label,
  filterOptions,
  styles,
  ...props
}: DropdownType) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-blue-950/85">{label}</label>
      <select className={styles} {...props}>
        {filterOptions.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
