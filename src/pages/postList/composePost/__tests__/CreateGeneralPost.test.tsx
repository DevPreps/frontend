import React from "react";
import { shallow } from "enzyme";
import CreateGeneralPost from "../CreateGeneralPost";

// test rendering
describe("Test Create General Post page", () => {
    const wrapper = shallow(<CreateGeneralPost />);

    it("should be able to render  CreateGeneralPost />", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    it("should contain GeneralPostForm component />", () => {
        expect(wrapper.find("GeneralPostForm").length).toBe(1);
    });
});
