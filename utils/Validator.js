const checkAll = (newEmp, employees) => {
  const errors = {};

  if (!checkName(newEmp.name)) {
    errors.name = "Vui lòng nhập đủ họ tên";
  } else {
    errors.name = "";
  }
  if (!checkMail(newEmp.email)) {
    errors.email = "Email thiếu hoặc không hợp lệ";
  } else {
    errors.email = "";
  }
  if (!checkPosition(newEmp.position)) {
    errors.position = "Vui lòng điền vị trí việc làm";
  } else {
    errors.position = "";
  }
  if (!checkId(newEmp.id, employees)) {
    errors.id = "ID không hợp lệ hoặc đã tồn tại";
  } else {
    errors.id = "";
  }

  return {
    isValid: Object.values(errors).every((msg) => msg === ""),

    errors,
  };
};

const checkName = (name) => {
  if (name.trim().length === 0) {
    return false;
  }
  return true;
};

const checkMail = (mail) => {
  const validateEmailRegex = /^\S+@\S+\.\S+$/;

  if (mail.trim().length === 0) {
    return false;
  } else if (!validateEmailRegex.test(mail.trim())) {
    return false;
  }
  return true;
};

const checkPosition = (position) => {
  if (position.trim().length === 0) {
    return false;
  }
  return true;
};

const checkId = (id, employees) => {
  if (id.trim().length === 0) {
    return false;
  } else if (employees.some((e) => e.id === id)) {
    return false;
  }
  return true;
};

const Validator = { checkAll };
export default Validator;
