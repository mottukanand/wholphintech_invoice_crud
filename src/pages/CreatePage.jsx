import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TableComponent from "../components/Table";
import { InputTextField } from "../components/InputTextField";
import { SelectField } from "../components/SelectField";

import DialogConfirmation from "../components/DialogConfirmation";
import DateField from "../components/DatePicker";
import { statusOptions, tableColumns } from "../constants/elementConstants";
import { Address } from "./Address";

function CreatePage() {
  const [status, setStatus] = React.useState("");
  const [toggleConfirmation, setToggleConfirmation] = useState("");

  const getTableRow = (id) => {
    return {
      id: id,
      name: <InputTextField id="itemName" placeholder="Item Name" />,
      description: (
        <InputTextField id="description" placeholder="Description" />
      ),
      qty: (
        <InputTextField
          type="number"
          id="qty"
          placeholder="1"
          inputProps={{ min: 1, max: 999 }}
        />
      ),
      price: (
        <InputTextField
          type="number"
          id="price"
          placeholder="1"
          inputProps={{ min: 1, max: 999 }}
        />
      ),
      amount: "$1.00",
      action: (
        <IconButton
          aria-label="delete"
          onClick={() => {
            setToggleConfirmation(id);
          }}
          color="error"
        >
          <DeleteOutlinedIcon />
        </IconButton>
      ),
    };
  };
  const [tableData, setTableData] = useState([getTableRow(1)]);

  const closeConfirmation = () => {
    setToggleConfirmation("");
  };
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const removeRow = (id) => {
    let filteredData = tableData.filter((val) => val.id !== id);
    setTableData(filteredData);
    setToggleConfirmation("");
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={3} sx={{ p: 5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <InputTextField
                  id="invoiceId"
                  label="Invoice Id"
                  placeholder="Invoice Id"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectField
                  id="status"
                  labelId="statusId"
                  label="Age"
                  selectedValue={status}
                  handleChange={handleChange}
                  options={statusOptions}
                  optionFirstLabel="Select Status"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DateField label="Date" />
              </Grid>
              <Grid item xs={12} md={3}>
                <DateField label="Due Date" />
              </Grid>

              <Grid item xs={12} md={6}>
                <Address
                  type="From:"
                  name="Belle J. Richter"
                  street="1300 Cooks Mine, NM 87829"
                  phone="305-829-7809"
                  email="belljrc23@gmail.com"
                  BtnIcon={BorderColorOutlinedIcon}
                  btnText="Change"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Address
                  type="To:"
                  name="Belle J. Richter"
                  street="1300 Cooks Mine, NM 87829"
                  phone="305-829-7809"
                  email="belljrc23@gmail.com"
                  BtnIcon={AddOutlinedIcon}
                  btnText="Add"
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1rem", fontWeight: 600, mb: "16px" }}
                  gutterBottom
                >
                  Detail
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <TableComponent columns={tableColumns} rows={tableData} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Button
                  //   onClick={() => setToggleConfirmation(true)}
                  onClick={() =>
                    setTableData([
                      ...tableData,
                      getTableRow(tableData?.length + 1),
                    ])
                  }
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<AddOutlinedIcon />}
                  sx={{
                    color: "rgb(22, 119, 255)",
                    border: "1px dashed rgb(22, 119, 255)",
                    borderColor: "rgb(22, 119, 255)",
                    "&:hover": {
                      color: "rgb(22, 119, 255)",
                      border: "1px dashed rgb(22, 119, 255)",
                      borderColor: "rgb(22, 119, 255)",
                    },
                  }}
                >
                  Add Item
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <InputTextField
                      type="number"
                      id="discount"
                      label="Discount(%)"
                      placeholder="Discount"
                      inputProps={{ min: 0, max: 999 }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputTextField
                      type="number"
                      id="tax"
                      label="Tax(%)"
                      placeholder="Tax"
                      inputProps={{ min: 0, max: 999 }}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    Sub Total:
                  </Grid>
                  <Grid item xs={6} md={6}>
                    $0.00
                  </Grid>
                  <Grid item xs={6} md={6}>
                    Discount:
                  </Grid>
                  <Grid item xs={6} md={6} sx={{ color: "rgb(82, 196, 26)" }}>
                    $0.00
                  </Grid>
                  <Grid item xs={6} md={6}>
                    Tax:
                  </Grid>
                  <Grid item xs={6} md={6}>
                    $0.00
                  </Grid>
                  <Grid item xs={6} md={6}>
                    Grand Total:
                  </Grid>
                  <Grid item xs={6} md={6}>
                    $0
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}>
                <InputTextField
                  id="notes"
                  label="Notes"
                  placeholder="Address"
                  multiline={true}
                  rows={3}
                  helperText="0/500"
                />
              </Grid>

              <Grid item xs={12} md={8}>
                <Stack direction="column" spacing={1}>
                  <SelectField
                    id="currency"
                    labelId="currencyId"
                    label="Set Currency"
                    selectedValue={status}
                    handleChange={handleChange}
                    options={statusOptions}
                    optionFirstLabel="Select Currency"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  sx={{ height: "100%" }}
                >
                  <Button variant="outlined" disabled>
                    Preview
                  </Button>
                  <Button variant="outlined">Save</Button>
                  <Button variant="contained">Create & Send</Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      {toggleConfirmation && (
        <DialogConfirmation
          dataId={toggleConfirmation}
          closeConfirmation={closeConfirmation}
          handleClick={removeRow}
        />
      )}
    </>
  );
}

export default CreatePage;
