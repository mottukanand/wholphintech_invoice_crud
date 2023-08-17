import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function DialogConfirmation({
  dataId,
  closeConfirmation,
  handleClick,
}) {
  const handleClose = () => {
    closeConfirmation();
  };

  return (
    <React.Fragment>
      <Dialog maxWidth="xs" open={Boolean(dataId)} onClose={handleClose}>
        <DialogContent sx={{ mb: 1, mt: 1 }}>
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2} alignItems="center">
              <Avatar
                sx={{
                  color: "rgb(255, 77, 79)",
                  backgroundColor: "rgb(255, 241, 240)",
                  width: "72px",
                  height: "72px",
                  fontSize: "1.75rem",
                }}
              >
                <DeleteOutlinedIcon />
              </Avatar>
              <Stack spacing={2}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    fontFamily: "Public Sans, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Are you sure you want to delete?
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontSize: "0.875rem",
                    lineHeight: 1.57,
                    fontFamily: "Public Sans, sans-serif",
                    fontWeight: 400,
                    textSlign: "center",
                  }}
                >
                  By deleting this product, Its details will also be removed
                  from invoice.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ width: "100%", mt: 4 }}>
                <Button variant="outlined" fullWidth onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => handleClick(dataId)}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
