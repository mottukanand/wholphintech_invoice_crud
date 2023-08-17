import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { elementconstant } from "../constants/elementConstants";

export function SelectField({
  id,
  labelId,
  selectedValue,
  handleChange,
  optionFirstLabel,
  options = elementconstant?.selectFieldOptions,
  label = elementconstant?.textFieldLabel,
  helperText = elementconstant?.textFieldHelperText,
  type = elementconstant?.textFieldType,
  variant = elementconstant?.textFieldVariant,
  size = elementconstant?.textFieldSize,
  fullWidth = elementconstant?.textFieldFullWidth,
  disabled = elementconstant?.textFieldDisabled,
  multiline = elementconstant?.textFieldMultiline,
  ...props
}) {
  return (
    <>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <Select
        labelId={labelId}
        id={id}
        variant={variant}
        fullWidth={fullWidth}
        size={size}
        value={selectedValue}
        onChange={handleChange}
      >
        {" "}
        <MenuItem disabled value="">
          {optionFirstLabel}
        </MenuItem>
        {options?.length
          ? options.map((element) => (
              <MenuItem value={element?.value} key={element?.value}>
                {element.label}
              </MenuItem>
            ))
          : null}
      </Select>
    </>
  );
}
