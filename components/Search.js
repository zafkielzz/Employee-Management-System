// src/components/Search.js

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Search = ({ onSearch }) => {
  return (
    <Box my={2}>
      <TextField
        fullWidth
        label="Tìm kiếm nhân viên theo ID hoặc Tên"
        variant="outlined"
        onChange={(e) => onSearch(e.target.value)}
      />
    </Box>
  );
};

export default Search;
