import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function EmployeeList({ employees, onDelete }) {
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Tên nhân viên", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "position", headerName: "Vị trí", flex: 1 },
    {
      field: "actions",
      headerName: "Hành động",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="text"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(params.row.id)}
        >
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={employees}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default EmployeeList;
