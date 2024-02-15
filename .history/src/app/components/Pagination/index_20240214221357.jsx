import React from "react";
import { Box, Pagination } from "@mui/material";

export default function PaginationComponent({ totalPages, page, onPageChange }) {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </Box>
  );
}
