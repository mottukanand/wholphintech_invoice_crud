import * as React from "react";
import { InputLabel } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateField(props) {
  const { label } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>

        <DemoContainer components={["DatePicker"]} sx={{ pt: 0 }}>
          <DatePicker
            sx={{ pt: 0 }}
            slotProps={{ textField: { size: "small", fullWidth: true } }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
