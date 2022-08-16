/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import ThemeHandler from "../components/ThemeHandler";

describe("<themehandler /> rendering", () => {
    const wrapper = shallow(<ThemeHandler />);
    // test if the TopNav component renders
    it("should be able to render <themehandler />", () => {
        wrapper;
    });
    it("should call setState with initial values on component mount", () => {
        const mockSetState = jest.spyOn(React, "useState");

        shallow(<ThemeHandler />);
    
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith("dark");
    });
});
