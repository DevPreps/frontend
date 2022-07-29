import {
    // FieldError,
    // Merge,
    // UseControllerProps,
    useForm,
} from "react-hook-form";

// interface Props<T> extends UseControllerProps<T> {
//     error?: Merge<FieldError, FieldError[]> | undefined;
//     options?: string[];
//     helperText?: string;
//     rows?: number;
//     tags?: string[];
//     type?: string;
// }
const {
    control,
    formState: { errors },
} = useForm();

export const TextFieldInputValues = {
    control,
    error: errors[0],
    helperText: "help text",
    name: "test",
};
