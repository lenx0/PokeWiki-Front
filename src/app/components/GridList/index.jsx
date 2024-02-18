import { Box } from "@mui/material";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import Image from "next/image";

const TableList = ({
  pokemonList,
  loading,
  page,
  itemsPerPage,
  totalPages,
  onPageChange,
  onPageSizeChange,
}) => {
  const columns = [
    {
      field: "id",
      headerName: "Código",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "sprite",
      headerName: "Pokemon",
      width: 150,
      renderCell: (params) => (
        <Image
          src={params.row.sprites.other["official-artwork"].front_default}
          width={50}
          height={50}
        />
      ),
    },
    { field: "name", headerName: "Nome", width: 150 },
    { field: "height", headerName: "Tamanho", width: 150 },
    { field: "weight", headerName: "Peso", width: 150 },
  ];

  return (
    <Box p={5} style={{ width: "100%" }}>
      <DataGrid
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        rows={pokemonList}
        rowHeight={75}
        autoHeight
        page={page}
        columns={columns}
        pageSize={itemsPerPage}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        rowCount={totalPages * itemsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
        loading={loading}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default TableList;
