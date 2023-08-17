import React from "react";
import { TextField, InputLabel, FormHelperText } from "@mui/material";
import { elementconstant } from "../constants/elementConstants";

export function InputTextField({
  id,
  placeholder,
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
      {label && <InputLabel>{label}</InputLabel>}
      <TextField
        id={id}
        type={type}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        placeholder={placeholder}
        disabled={disabled}
        multiline={multiline}
        {...props}
      />
      {helperText && (
        <FormHelperText sx={{ textAlign: "right" }}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
}
