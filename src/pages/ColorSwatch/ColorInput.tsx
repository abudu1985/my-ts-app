import { AdjustmentInputProps } from "./ColorAdjustment";

interface IColorInput {
  id: string;
  label: string;
  value: number;
}

export const ColorInput = ({
  id,
  label,
  value,
}: // onChange
IColorInput) => {
  return (
    <div className="color-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        min="0"
        max="255"
        value={value}
        readOnly
        // onChange={onChange}
      />
    </div>
  );
};
