import React from "react";

// MUI style
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";

//MUI icons
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";

interface State {
	email: string;
	password: string;
	showPassword: boolean;
}

const Login = () => {
	const [values, setValues] = React.useState<State>({
		email: "",
		password: "",
		showPassword: false,
	});

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<div>
			<form>
				<Box
					display="flex"
					flexDirection="column"
					maxWidth={450}
					alignItems="center"
					justifyContent="center"
					margin="auto"
					marginTop={20}
					padding={5}
					borderRadius={5}
					boxShadow={"5px 5px 10px #ccc"}
					sx={{
						":hover": {
							boxShadow: "10px 10px 20px #ccc",
						},
					}}
				>
					<Typography variant="h4" padding={3} textAlign="center">
						Login
					</Typography>

					<FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
						<OutlinedInput
							id="outlined-adornment-email"
							value={values.email}
							onChange={handleChange("email")}
							endAdornment={
								<InputAdornment position="end">
									<IconButton edge="end">
										<MailIcon />
									</IconButton>
								</InputAdornment>
							}
							label="Email"
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">
							Password
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={values.showPassword ? "text" : "password"}
							value={values.password}
							onChange={handleChange("password")}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
					<Button sx={{ m: 1, width: "36ch" }} variant="contained">
						Login
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default Login;
