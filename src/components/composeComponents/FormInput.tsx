import React, { useState } from "react";
import {
    Controller,
    FieldError,
    FieldValues,
    Merge,
    UseControllerProps,
} from "react-hook-form";

// Import MUI components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

interface Props<T> extends UseControllerProps<T> {
    error?: Merge<FieldError, FieldError[]> | undefined;
    options?: string[];
    helperText?: string;
    rows?: number;
    tags?: string[];
}
// reusable TextField Input
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

// reusable Select Input
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

// reusable Tags Input (multi select)
export const TagsInput = <T extends FieldValues>({
    control,
    error,
    helperText,
    name,
    tags,
}: Props<T>) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
                marginTop: 20,
            },
        },
    };
    const [selectTags, setSelectTags] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof selectTags>) => {
        const {
            target: { value },
        } = event;
        setSelectTags(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl fullWidth>
                    <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
                    <Select
                        multiple
                        labelId={`${name}-select-label`}
                        id={`${name}-input`}
                        label={name}
                        onChange={handleChange}
                        defaultValue={[]}
                        {...field}
                        input={
                            <OutlinedInput
                                id="select-multiple-chip"
                                label="Chip"
                            />
                        }
                        renderValue={(selected) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                }}
                            >
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {tags?.map((tag) => (
                            <MenuItem key={tag} value={tag}>
                                {tag}
                            </MenuItem>
                        ))}
                        {selectTags.map((tag) => (
                            <MenuItem key={tag} value={tag}>
                                {tag}
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
