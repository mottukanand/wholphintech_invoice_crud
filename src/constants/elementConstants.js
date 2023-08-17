const elementconstant = {
  textFieldType: "text",
  textFieldLabel: "",
  textFieldVariant: "outlined",
  textFieldSize: "small",
  textFieldFullWidth: true,
  textFieldDisabled: false,
  textFieldMultiline: false,
  textFieldHelperText: "",
  selectFieldOptions: [],
};

const statusOptions = [
  {
    value: "paid",
    label: "Paid",
  },
  {
    value: "unpaid",
    label: "Unpaid",
  },
  {
    value: "cancelled",
    label: "Cancelled",
  },
];

const tableColumns = [
  "#",
  "name",
  "description",
  "qty",
  "price",
  "amount",
  "action",
];
export { elementconstant, statusOptions, tableColumns };
