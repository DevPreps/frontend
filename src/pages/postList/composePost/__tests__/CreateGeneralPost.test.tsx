import React from "react";
import { shallow } from "enzyme";
import CreateGeneralPost from "../CreateGeneralPost";

// test rendering
describe("Test Create General Post page", () => {
    const wrapper = shallow(<CreateGeneralPost />);

    it("should be able to render  CreateGeneralPost />", () => {
        wrapper;
    });

    // it("should change the text", () => {
    //     const input = wrapper.find("select").at(0);

    //     //for selecting one input
    //     input.simulate("change", {
    //     target: { value: "learn" }
    //     });

    //     const refoundInput = wrapper.find("input").at(0);
    //     expect(refoundInput.props().value).toEqual("learn");

    //     //expect(input.instance().value).toEqual("username");
    //     //expect(input.text()).toEqual("username");
    // });
});
