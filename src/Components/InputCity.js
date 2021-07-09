import React from "react";
import { TextField } from "@material-ui/core";

export const InputCity = ({ handleSubmit, handleChange, error, cityName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        error={error}
        id={error ? "outlined-error-helper-text" : "outlined-search"}
        helperText={error ? "City is not found" : ""}
        label="Search City"
        type="search"
        variant="outlined"
        value={cityName}
        onChange={handleChange}
      />
    </form>
  );
};
