import { useId, useState } from "react";

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  rightSlot?: React.ReactNode;
  autoComplete?: string;
}

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  required,
  rightSlot,
  autoComplete,
}: Props) => {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;
  const float = focused || filled;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full h-14 rounded-lg border-2 bg-card px-4 pt-5 pb-1 ${rightSlot ? "pr-12" : ""} text-sm font-medium text-ink outline-none transition-all ${
          focused
            ? "border-forest ring-4 ring-forest/15"
            : "border-border hover:border-forest/40"
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-150 ${
          float
            ? "top-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest"
            : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}{required && <span className="text-forest"> *</span>}
      </label>
      {rightSlot && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
      )}
    </div>
  );
};

export default FloatingInput;
