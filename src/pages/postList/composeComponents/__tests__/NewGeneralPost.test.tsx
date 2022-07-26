import React from "react";
import { mount, shallow } from "enzyme";
import NewGeneralPost from "../NewGeneralPost";

// test rendering
describe("Test Compose New General Post page", () => {
    const wrapper = shallow(<NewGeneralPost />);

    it("should be able to render <NewGeneralPost />", () => {
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
