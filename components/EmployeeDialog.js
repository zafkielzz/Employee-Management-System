import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

function EmployeeDialog({
  open,
  onClose,
  onSave,
  newEmployee,
  setNewEmployee,
  errors,
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Thêm nhân viên mới</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="ID"
          fullWidth
          value={newEmployee.id}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, id: e.target.value })
          }
          error={!!errors.id}
          helperText={errors.id}
        />
        <TextField
          margin="dense"
          label="Tên nhân viên"
          fullWidth
          value={newEmployee.name}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, name: e.target.value })
          }
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          margin="dense"
          label="Email"
          fullWidth
          value={newEmployee.email}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, email: e.target.value })
          }
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          margin="dense"
          label="Vị trí"
          fullWidth
          value={newEmployee.position}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, position: e.target.value })
          }
          error={!!errors.position}
          helperText={errors.position}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Hủy
        </Button>
        <Button onClick={onSave} variant="contained" color="primary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmployeeDialog;
