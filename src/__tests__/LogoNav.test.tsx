/**
 * @jest-environment jsdom
 */
import { shallow } from "enzyme";
import React from "react";
import Logo from "../components/LogoNav";

describe("<SideNav /> rendering", () => {
    const wrapper = shallow(<Logo />);
        // test if there is drawer
        it("should render Typography", () => {
            expect(wrapper.find("Typography").at(0)).toBeTruthy();
        });
});

