import { Box } from "@mui/material";
import { DataGrid, ptBR } from "@mui/x-data-grid";

const TableList = ({ pokemonList, loading, page, itemsPerPage, totalPages, onPageChange, onPageSizeChange }) => {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    { field: "height", headerName: "Height", width: 110 },
    { field: "weight", headerName: "Weight", width: 110 },
  ];

  return (
    <Box p={5} style={{ width: "100%" }}>
      <DataGrid
      localeText={
        ptBR.components.MuiDataGrid.defaultProps.localeText
      }
        rows={pokemonList}
        rowHeight={75}
        autoHeight
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
