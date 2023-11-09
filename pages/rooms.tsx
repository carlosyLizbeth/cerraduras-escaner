import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Rooms() {
  return (
    <Box marginTop="12px">
      <Box
        sx={{
          backgroundColor: "#3851AC",
          height: "45vh",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          paddingRight: "20px",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <Stack spacing={2}>
          <TextField
            sx={{
              backgroundColor: "#fff",
              borderRadius: "15px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            id="outlined-basic"
            label="Ingrese ubicacion"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "#fff",
              borderRadius: "15px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonAddAlt1Icon />
                </InputAdornment>
              ),
            }}
            id="outlined-basic"
            label="Seleccione huespedes"
            variant="outlined"
          />
          <TextField
            sx={{
              backgroundColor: "#fff",
              borderRadius: "15px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
            id="outlined-basic"
            label="Ingrese fechas"
            variant="outlined"
          />
        </Stack>
      </Box>

      <Box>blanco</Box>
    </Box>
  );
}
