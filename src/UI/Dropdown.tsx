import { forwardRef, InputHTMLAttributes } from "react";

interface DropdownType extends InputHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  filterOptions: string[];
  styles?: string;
  dropdownStyles?: string;
  labelStyles?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownType>(function Dropdown(
  { id, label, filterOptions, styles, dropdownStyles, labelStyles, ...props },
  ref
) {
  return (
    <div className={`flex flex-col gap-2 ${styles ?? ""}`}>
      <label
        htmlFor={id}
        className={`text-blue-950/85 dark:text-zinc-100 ${labelStyles ?? ""}`}>
        {label}
      </label>
      <select id={id} className={dropdownStyles} {...props} ref={ref}>
        {filterOptions.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Dropdown;
