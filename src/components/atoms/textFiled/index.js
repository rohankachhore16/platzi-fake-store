import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const TextFiledatom = ({
  margin,
  required,
  fullWidth,
  id,
  type,
  autoComplete,
  autoFocus,
 value,onChange, name,
  label,
  error,
  InputProps,
  helperText,
}) => {
  return (
    <>
      <TextField
        margin={margin}
        required={required}
        fullWidth={fullWidth}
        id={id}
        label={label}
        name={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        type={type}
        error={error}
        helperText={helperText}
        InputProps={InputProps}
        size="small"
      >
                    {error &&  <FormHelperText error>{helperText}</FormHelperText>}

        </TextField>
    </>
  );
};

export default TextFiledatom;
