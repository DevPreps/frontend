/**
 * @jest-environment jsdom
*/
import React, { useContext, useMemo, useState } from "react";
import { mount, shallow } from "enzyme";
import ThemeToggler from "../components/ThemeToggler";
import IconButton from "@mui/material/IconButton";
import DarkMode from "@mui/icons-material/DarkModeOutlined";
import LightMode from "@mui/icons-material/LightModeOutlined";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../context/appContext";
import ThemeHandler from "../components/ThemeHandler";
import { baseTheme } from "../components/Themes";
import App from "../App";

describe("Toggle", () => {
    const wrapper = shallow(<ThemeToggler />);
    it("renders a button with \"Toggle\" as children", () => {
        expect(wrapper.find(".themeToggle").last()).toHaveLength(1);
    });
    it("renders \"Toggled\" as button children if button is clicked", () => {
        console.log(wrapper.debug())
        console.log(wrapper.find(IconButton).last())
        expect(wrapper.find(".themeToggle").last().hasClass("light")).toEqual(true);
        wrapper.find(".themeToggle").last().simulate("click");
        expect(wrapper.find(".themeToggle").last().hasClass("dark")).toEqual(true);
    });
    it("renders \"Toggle\" as button children if button is clicked again", () => {
        console.log(wrapper.debug())
        console.log(wrapper.find(IconButton).last())
        expect(wrapper.find(".themeToggle").last().hasClass("dark")).toEqual(true);
        wrapper.find(".themeToggle").last().simulate("click");
        expect(wrapper.find(".themeToggle").last().hasClass("light")).toEqual(true);
    });
    /*it("test enzyme dive" , () => {
        const [mode, setMode] = useState<"light" | "dark">("dark");
        const currMode = prevMode === "light" ? "dark" : "light";
        const colorMode = useMemo(
            () => ({
                toggleColorMode: () => {
                    setMode((prevMode) => {
                        const currMode = prevMode === "light" ? "dark" : "light";
                        localStorage.setItem("colorMode", currMode);
                        return currMode;
                    });
                },
            }),
            [mode]
        );
        // Update the theme only if the mode changes
        const theme = useMemo(() => createTheme(baseTheme(mode)), [mode]);
        const TestComponent = () => (
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </ColorModeContext.Provider>
        )
        const element = shallow(<TestComponent/>);
        expect(element.find(<App/>).dive().text()).toBe("dark")
    })*/
})