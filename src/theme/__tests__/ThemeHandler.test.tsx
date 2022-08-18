/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import ThemeHandler from "../ThemeHandler";
import { ColorModeContext } from "../../context/appContext";

describe("rendering", () => {
    test("enzyme dive for <themehandler />", () => {
        const TestComponent = () => (
            <ColorModeContext.Provider value={{ toggleColorMode: () => null }}>
                <ThemeHandler />
            </ColorModeContext.Provider>
        );
        const element = shallow(<TestComponent />);
        expect(element.find(ThemeHandler).dive().text()).toBe(
            "<ThemeProvider />"
        );
    });
    it("should call setState with initial values on component mount", () => {
        const mockSetState = jest.spyOn(React, "useState");

        shallow(<ThemeHandler />);

        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith("dark");
    });
});
