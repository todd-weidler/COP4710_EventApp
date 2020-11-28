import React from "react";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function MyTextField(props) {
  const { name, label, type, id, errorMsg, hasError, ...rest } = props;
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name={name}
        label={label}
        type={type}
        id={id}
        {...rest}
        error={hasError}
      />
      {hasError ? (
        <FormHelperText error>{errorMsg}</FormHelperText>
      ) : (
        <FormHelperText> </FormHelperText>
      )}
    </>
  );
}
