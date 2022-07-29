import React from "react";
import { shallow } from "enzyme";
import UpdateGeneralPost from "../UpdateGeneralPost";

// test rendering
describe("Test Update General Post page", () => {
    const wrapper = shallow(<UpdateGeneralPost />);

    it("should be able to render  UpdateGeneralPost />", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    it("should contain  GeneralPostForm component />", () => {
        expect(wrapper.find("GeneralPostForm").length).toBe(1);
    });
});
