import React from "react";
import { shallow } from "enzyme";
import Heroes from "../Heroes";

describe("Test Heroes page", () => {
    const wrapper = shallow(<Heroes />);
    it("should be able to render <Heroes />", () => {
        console.log(wrapper.debug());
        expect(wrapper.find({children: "Discussions"}).exists()).toBe(true)
    });
});
