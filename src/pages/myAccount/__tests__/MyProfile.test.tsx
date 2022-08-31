import React from "react";

import { shallow } from "enzyme";

import MyProfile from "../MyProfile";

// test component rendering
describe("<MyProfile /> rendering", () => {
    const wrapper = shallow(<MyProfile />);

    it("should contain <MyProfileForm />", () => {
        expect(wrapper.find("MyProfileForm").length).toBe(1);
    });
});
