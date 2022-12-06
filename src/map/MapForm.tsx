import { Box, Button, TextField } from "@mui/material";
import { useContext, useRef } from "react";
import { ShipContext } from "../ships/ship.context";
import { MapContext } from "./map.context";
import "./MapForm.css";

export default function MapForm() {
  const { size, createMap } = useContext(MapContext);
  const { ships, deleteShip } = useContext(ShipContext);
  const widthInput = useRef<HTMLInputElement>(null);
  const heightInput = useRef<HTMLInputElement>(null);

  return (
    <Box component="form" noValidate className="map-form-container" autoComplete="off" sx={{ "&>*": { m: 1 } }}>
      <TextField label="Ancho del mapa" type="number" inputRef={widthInput} defaultValue={size.x} />
      <TextField label="Alto del mapa" type="number" inputRef={heightInput} defaultValue={size.y} />
      <Button
        variant="contained"
        onClick={() => {
          ships.forEach((s) => deleteShip(s.name));
          createMap(widthInput.current?.value);
        }}
      >
        Crear
      </Button>
    </Box>
  );
}
