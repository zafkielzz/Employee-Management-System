import axios from "axios";

const API_URL = "http://localhost:3000/employees";

const getAllEmployees = () => {
  return axios.get(API_URL).then((response) => response.data);
};

const createEmployee = (employeeData) => {
  return axios.post(API_URL, employeeData).then((response) => response.data);
};

const deleteEmployee = (employeeId) => {
  return axios
    .delete(`${API_URL}/${employeeId}`)
    .then((response) => response.data);
};

const EmployeeService = {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
};

export default EmployeeService;
