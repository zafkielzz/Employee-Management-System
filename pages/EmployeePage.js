import { useEffect, useState, useRef } from "react";
import EmployeeService from "../services/EmployeeService";
import Validator from "../utils/Validator";

import Header from "../components/Header";
import Search from "../components/Search";
import EmployeeList from "../components/EmployeeList";
import EmployeeDialog from "../components/EmployeeDialog";
import DownloadFile from "../components/DownloadFile";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    email: "",
    position: "",
  });
  const [errors, setErrors] = useState({});

  const addButtonRef = useRef(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await EmployeeService.getAllEmployees();
        setEmployees(data);
        setFilteredEmployees(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployees();
  }, []);

  const handleSearch = (query) => {
    const cleanQuery = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
    if (!cleanQuery) {
      setFilteredEmployees(employees);
      return;
    }
    const results = employees.filter(
      (employee) =>
        employee.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(cleanQuery) ||
        employee.id
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(cleanQuery)
    );
    setFilteredEmployees(results);
  };

  const handleDelete = (id) => {
    EmployeeService.deleteEmployee(id);
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewEmployee({ id: "", name: "", email: "", position: "" });
    setErrors({});
  };

  const handleSave = () => {
    const { isValid, errors } = Validator.checkAll(newEmployee, employees);
    setErrors(errors);
    if (isValid) {
      EmployeeService.createEmployee(newEmployee);
      const updatedEmployees = [...employees, newEmployee];
      setEmployees(updatedEmployees);
      setFilteredEmployees(updatedEmployees);
      handleCloseDialog();
    }
  };

  return (
    <div style={{ height: 600, width: "95%", padding: 10 }}>
      <Header onAddClick={handleOpenDialog} addButtonRef={addButtonRef} />
      <Search onSearch={handleSearch} />
      <EmployeeList employees={filteredEmployees} onDelete={handleDelete} />
      <DownloadFile />
      <EmployeeDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onSave={handleSave}
        newEmployee={newEmployee}
        setNewEmployee={setNewEmployee}
        errors={errors}
      />
    </div>
  );
}

export default EmployeePage;
