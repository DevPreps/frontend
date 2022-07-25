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
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

interface State {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	showPassword: boolean;
	showConfirmPassword: boolean;
}

const Register = () => {
	const [values, setValues] = React.useState<State>({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		showPassword: false,
		showConfirmPassword: false,
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

	const handleClickShowConfirmPassword = () => {
		setValues({
			...values,
			showConfirmPassword: !values.showConfirmPassword,
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
					marginTop={10}
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
						Sign Up
					</Typography>
					<FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-username">
							Username
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-username"
							value={values.username}
							onChange={handleChange("username")}
							endAdornment={
								<InputAdornment position="end">
									<IconButton edge="end">
										<AccountCircleRoundedIcon />
									</IconButton>
								</InputAdornment>
							}
							label="username"
						/>
					</FormControl>
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
					<FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-confirmPassword">
							Confirm Password
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-confirmPassword"
							type={values.showConfirmPassword ? "text" : "password"}
							value={values.confirmPassword}
							onChange={handleChange("confirmPassword")}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle confirm password visibility"
										onClick={handleClickShowConfirmPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showConfirmPassword ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							}
							label="Confirm Password"
						/>
					</FormControl>
					<Button sx={{ m: 1, width: "36ch" }} variant="contained">
						Sign Up
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default Register;
