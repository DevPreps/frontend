import React from "react";

import { shallow } from "enzyme";

import Logo from "../LogoNav";

describe("rendering Typography", () => {
    const wrapper = shallow(<Logo />);
    it("should render Typography", () => {
        expect(wrapper.find("Typography").at(0)).toBeTruthy();
    });
});
