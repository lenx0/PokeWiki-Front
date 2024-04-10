import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Pagination = ({
  page,
  totalPages,
  itemsPerPage,
  setPage,
  setItemsPerPage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(totalPages);
  };

  const handleChangeItemsPerPage = (event) => {
    const newItemsPerPage = parseInt(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setPage(1);
  };

  return (
    <Box
      mt={isMobile ? 1 : 4}
      ml={isMobile && 2}
      gap={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        variant="contained"
        onClick={goToFirstPage}
        disabled={page === 1}
        style={
          isMobile ? { width: "40px", minWidth: "30px", fontSize: "10px" } : {}
        }
      >
        {isMobile ? "prim" : "Primeira"}
      </Button>
      <Button
        variant="contained"
        onClick={prevPage}
        disabled={page === 1}
        style={
          isMobile ? { width: "40px", minWidth: "30px", fontSize: "10px" } : {}
        }
      >
        {isMobile ? "ANT" : "Anterior"}
      </Button>
      <Typography variant="body1" style={isMobile ? { fontSize: "12px" } : {}}>
        Página {page} de {totalPages}
      </Typography>
      <Button
        variant="contained"
        onClick={nextPage}
        disabled={page === totalPages}
        style={
          isMobile ? { width: "40px", minWidth: "30px", fontSize: "10px" } : {}
        }
      >
        {isMobile ? "PRÓX" : "Próxima"}
      </Button>
      <Button
        variant="contained"
        onClick={goToLastPage}
        disabled={page === totalPages}
        style={
          isMobile ? { width: "40px", minWidth: "30px", fontSize: "10px" } : {}
        }
      >
        {isMobile ? "ULT" : "Última"}
      </Button>
      <Select
        value={itemsPerPage}
        onChange={handleChangeItemsPerPage}
        label="Itens por página"
        variant="outlined"
        style={
          isMobile
            ? { fontSize: "11px", height: "30px", width: "30px" }
            : { marginLeft: 10 }
        }
      >
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={24}>24</MenuItem>
        <MenuItem value={48}>48</MenuItem>
      </Select>
    </Box>
  );
};

export default Pagination;
