import { Box } from "@mui/material";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import Image from "next/image";
import Pagination from "../Pagination";
import { capitalizeFirstLetter, capitalizePokemonNames } from "@/services/utils/CapitalizeFirstLetter";

const GridList = ({
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
          width={70}
          height={70}
        />
      ),
    },
    { field: "name", headerName: "Nome", width: 150 },
    { field: "height", headerName: "Tamanho", width: 150 },
    { field: "weight", headerName: "Peso", width: 150 },
  ];

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const handlePageSizeChange = (pageSize) => {
    onPageSizeChange(pageSize);
  };

  return (
    <Box p={5} style={{ width: "100%" }}>
      <DataGrid
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        rows={capitalizePokemonNames(pokemonList)}
        rowHeight={75}
        autoHeight
        columns={columns}
        loading={loading}
        disableSelectionOnClick
        hideFooterPagination={true}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={(newPage) => handlePageChange(newPage)}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={(pageSize) => handlePageSizeChange(pageSize)}
      />
    </Box>
  );
};

export default GridList;
