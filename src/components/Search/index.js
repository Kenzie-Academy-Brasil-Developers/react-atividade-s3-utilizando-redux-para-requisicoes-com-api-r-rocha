import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
  Typography
} from "@material-ui/core";
import { Alert, Snackbar } from "@mui/material";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(true)
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setInput("");
    setOpen(true);
    setError(false);
    setInput(data.input);
    dispatch(addDigimonsThunk(data.input, error, setErrorMessage));
  };

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Box component="form">
      <Typography variant="h3" color="secondary">Busca de Digimons</Typography>
      <FormControl variant="filled">
        <FilledInput
          onChange={(event) => setInput(event.target.value)}
          {...register("input", { required: true })}
        />
        <InputLabel htmlFor="component-filled">
          {"Digite o nome do Digimon"}
        </InputLabel>
        <FormHelperText error>
          {errors.input?.type === "required" &&
            "O nome do Digimon é obrigatório"}
        </FormHelperText>
        <Button
          sx={{ padding: 7 }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Pesquisar
        </Button>
      </FormControl>
      {errorMessage ? (
        <Snackbar open={open} children={<Alert
          sx={{ mt: 2 }}
          severity="error"
          variant="filled"
          children={errorMessage}
          onClose={handleClick}
        />} />

      ) : (
        <></>
      )}
    </Box>
  );
};

export default Search;
