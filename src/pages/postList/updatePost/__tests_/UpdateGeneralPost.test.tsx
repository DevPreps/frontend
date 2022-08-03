import React from "react";
import { shallow } from "enzyme";
import UpdateGeneralPost from "../UpdateGeneralPost";

// test rendering
describe("Test Update General Post page", () => {
    const wrapper = shallow(<UpdateGeneralPost />);

    it("should contain  GeneralPostForm component />", () => {
        expect(wrapper.find("GeneralPostForm").length).toBe(1);
    });

    it("should contain Edit button", () => {
        expect(wrapper.find({ children: "Edit" }).length).toBe(1);
    });

    it("should contain Close button", () => {
        expect(wrapper.find({ children: "X" }).length).toBe(1);
    });
});
