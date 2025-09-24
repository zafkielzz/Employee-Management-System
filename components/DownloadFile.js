import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import EmployeeService from "../services/EmployeeService";

function DownloadFile({ fileName = "employees.csv" }) {
  const handleDownload = async () => {
    try {
      const data = await EmployeeService.getAllEmployees();
      if (!data || data.length === 0) {
        alert("Không có dữ liệu để tải!");
        return;
      }

      const headers = Object.keys(data[0]);
      const csvRows = [];

      csvRows.push(headers.join(","));
      for (const row of data) {
        const values = headers.map((header) => `"${row[header] ?? ""}"`);
        csvRows.push(values.join(","));
      }

      const csvContent = csvRows.join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Lỗi tải dữ liệu:", err);
    }
  };

  return (
    <Button
      variant="outlined"
      color="success"
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
      style={{ marginTop: "10px" }}
    >
      Tải về (csv)
    </Button>
  );
}

export default DownloadFile;
