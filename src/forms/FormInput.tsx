import React, { useState } from "react";

// Import MUI components
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Chip,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import {
    Controller,
    FieldError,
    FieldValues,
    Merge,
    UseControllerProps,
    useFormContext,
} from "react-hook-form";

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
    variant?: "standard" | "outlined" | "filled";
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
    variant = "standard",
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
                    variant={variant}
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

// reusable Password Input
export const PasswordInput = <T extends FieldValues>({
    disabled = false,
    helperText,
    name,
    required = true,
    variant = "standard",
}: Props<T>) => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    variant={variant}
                    fullWidth
                    error={errors.hasOwnProperty(name)}
                    disabled={disabled}
                    {...field}
                    id={`${name}-input`}
                    label={name}
                    required={required}
                    type={showPassword ? "text" : "password"}
                    helperText={errors[name]?.message || helperText}
                    sx={styles.marginY}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
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
                        // add following setting to disable MUI default behavior of adds padding to the body tag when a dialog/select menu is opened
                        MenuProps={{
                            disableScrollLock: true,
                        }}
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
    category: string;
    disabled?: boolean;
    helperText: string;
    setCategory?: React.Dispatch<React.SetStateAction<string>>;
}

// CategoryInput is used in CreatePost and UpdatePost components
export const CategoryInput = ({
    category,
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
                value={category}
                // set defaultValue here to fix MUI warning
                // defaultValue={defaultValue}
                // add following setting to disable MUI default behavior of adds padding to the body tag when a dialog/select menu is opened
                MenuProps={{
                    disableScrollLock: true,
                }}
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
        // add following setting to disable MUI default behavior of adds padding to the body tag when a dialog/select menu is opened
        disableScrollLock: true,
    },
    selectLabel: {
        left: 0,
    },
    marginY: {
        my: 1,
    },
} as const;
