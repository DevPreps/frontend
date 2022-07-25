import React from "react";
import {
    Controller,
    FieldName,
    FieldError,
    FieldValues,
    UseControllerProps,
} from "react-hook-form";

// Import MUI components

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

interface Props<T> extends UseControllerProps<T> {
    error?: FieldError | undefined;
    options?: string[];
    helperText?: string;
    rows?: number;
}

export const TextFieldInput = <T extends FieldValues>({
    control,
    error,
    helperText,
    name,
    rows,
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    id={`${name}-input`}
                    label={name}
                    variant="outlined"
                    defaultValue=""
                    fullWidth
                    multiline
                    rows={rows}
                    {...field}
                    helperText={error?.message || helperText}
                />
            )}
        />
    );
};

export const SelectInput = <T extends FieldValues>({
    control,
    error,
    helperText,
    name,
    options,
}: Props<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl fullWidth>
                    <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
                    <Select
                        labelId={`${name}-select-label`}
                        id={`${name}-input`}
                        label={name}
                        defaultValue=""
                        {...field}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>
                        {error?.message || helperText}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
};
