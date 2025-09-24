import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Header({ onAddClick, addButtonRef }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Danh sách nhân viên</h2>
      <Button
        ref={addButtonRef}
        onClick={onAddClick}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
        Thêm nhân viên mới
      </Button>
    </div>
  );
}

export default Header;
