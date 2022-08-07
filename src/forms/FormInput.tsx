import React, { useState } from "react";
import {
    Controller,
    FieldError,
    FieldValues,
    Merge,
    UseControllerProps,
    useFormContext,
} from "react-hook-form";

// Import MUI components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { categoryOptions } from "../data";

// define interface for props
interface Props<T> extends UseControllerProps<T> {
    disabled?: boolean;
    error?: Merge<FieldError, FieldError[]> | undefined;
    helperText?: string;
    multiline?: boolean;
    options?: string[];
    required?: boolean;
    rows?: number;
    tags?: string[];
    type?: string;
}

// reusable TextField Input
export const TextFieldInput = <T extends FieldValues>({
    disabled = false,
    helperText,
    multiline = false,
    name,
    required = true,
    rows = 1,
    type = "text",
}: Props<T>) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    variant="standard"
                    fullWidth
                    error={errors.hasOwnProperty(name)}
                    disabled={disabled}
                    {...field}
                    id={`${name}-input`}
                    label={name}
                    multiline={multiline}
                    required={required}
                    rows={rows}
                    type={type}
                    helperText={errors[name]?.message || helperText}
                    sx={styles.marginY}
                />
            )}
        />
    );
};

// reusable Select Input
export const SelectInput = <T extends FieldValues>({
    disabled = false,
    defaultValue,
    helperText,
    name,
    options,
}: Props<T>) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl
                    fullWidth
                    variant="standard"
                    error={errors.hasOwnProperty(name)}
                    sx={styles.marginY}
                >
                    <InputLabel
                        id={`${name}-select-label`}
                        sx={styles.selectLabel}
                    >
                        {name}
                    </InputLabel>
                    <Select
                        disabled={disabled}
                        labelId={`${name}-select-label`}
                        id={`${name}-input`}
                        label={name}
                        // set defaultValue here to fix MUI warning
                        defaultValue={defaultValue}
                        {...field}
                    >
                        {options?.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText sx={styles.hText}>
                        {errors[name]?.message || helperText}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
};

// reusable Tags Input (multi select)
export const TagsInput = <T extends FieldValues>({
    helperText,
    name,
    tags,
}: Props<T>) => {
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
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl
                    fullWidth
                    variant="standard"
                    error={errors.hasOwnProperty(name)}
                    sx={styles.marginY}
                >
                    <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
                    <Select
                        multiple
                        labelId={`${name}-select-label`}
                        id={`${name}-input`}
                        label={name}
                        onChange={handleChange}
                        {...field}
                        renderValue={(selected) => (
                            <Box sx={styles.box}>
                                {selected?.map((value: string) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={styles.menuProps}
                    >
                        {tags?.map((tag) => (
                            <MenuItem key={tag} value={tag}>
                                {tag}
                            </MenuItem>
                        ))}
                        {selectTags?.map((tag) => (
                            <MenuItem key={tag} value={tag}>
                                {tag}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText sx={styles.hText}>
                        {errors[name]?.message || helperText}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
};

// define interface for props
interface categoryProps {
    defaultValue: string;
    disabled?: boolean;
    helperText: string;
    setCategory?: React.Dispatch<React.SetStateAction<string>>;
}

// CategoryInput is used in CreatePost and UpdatePost components
export const CategoryInput = ({
    defaultValue,
    disabled = false,
    helperText,
    setCategory = () => void 0,
}: categoryProps) => {
    return (
        <FormControl
            disabled={disabled}
            fullWidth
            variant="standard"
            sx={styles.marginY}
        >
            <InputLabel id="category-select-label" sx={styles.selectLabel}>
                category
            </InputLabel>
            <Select
                labelId="category-select-label"
                id={"category-input"}
                label="category"
                onChange={(e: SelectChangeEvent<string>) => {
                    setCategory(e.target.value);
                }}
                // set defaultValue here to fix MUI warning
                defaultValue={defaultValue}
            >
                {categoryOptions?.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText sx={styles.hText}>{helperText}</FormHelperText>
        </FormControl>
    );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const styles = {
    box: {
        display: "flex",
        flexWrap: "wrap",
        gap: 0.5,
    },
    hText: {
        ml: 0,
    },
    menuProps: {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    },
    selectLabel: {
        left: 0,
    },
    marginY: {
        my: 2,
    },
} as const;
