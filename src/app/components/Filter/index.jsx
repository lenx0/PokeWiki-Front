import React from "react";
import {
  Box,
  Button,
  Drawer,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const Filter = ({
  filterName,
  setFilterName,
  filterType,
  setFilterType,
  pokemonTypes,
  applyFilters,
  clearFilters,
  drawerOpen,
  toggleDrawer,
}) => {
  return (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
      <Box p={2} width={300}>
        <Typography variant="h6" gutterBottom>
          Filtros
        </Typography>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <InputLabel htmlFor="filter-type" shrink={false}>
          Selecione um tipo
        </InputLabel>
        <Select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          variant="outlined"
          fullWidth
          displayEmpty
          style={{ marginBottom: 20 }}
        >
          {pokemonTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
        <Grid container gap={1}>
          <Button
            variant="contained"
            onClick={() => applyFilters(filterName)}
            fullWidth
            disabled={!filterType && !filterName.trim()}
          >
            Aplicar Filtros
          </Button>
          <Button variant="contained" onClick={clearFilters} fullWidth>
            Limpar
          </Button>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default Filter;
