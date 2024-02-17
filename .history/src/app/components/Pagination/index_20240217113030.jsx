const Pagination = ({
  page,
  totalPages,
  setPage,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);

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
      mt={4}
      gap={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button variant="contained" onClick={goToFirstPage} disabled={page === 1}>
        Primeira
      </Button>
      <Button variant="contained" onClick={prevPage} disabled={page === 1}>
        Anterior
      </Button>
      <Typography variant="body1">
        Página {page} de {totalPages}
      </Typography>
      <Button
        variant="contained"
        onClick={nextPage}
        disabled={page === totalPages}
      >
        Próxima
      </Button>
      <Button
        variant="contained"
        onClick={goToLastPage}
        disabled={page === totalPages}
      >
        Última
      </Button>
      <Select
        value={itemsPerPage}
        onChange={handleChangeItemsPerPage}
        label="Itens por página"
        variant="outlined"
        style={{ marginLeft: 10 }}
      >
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={24}>24</MenuItem>
        <MenuItem value={48}>48</MenuItem>
      </Select>
    </Box>
  );
};

export default Pagination
