import React from "react";
import { shallow } from "enzyme";
import GeneralPostForm from "../GeneralPostForm";
import { IFormInputs } from "../IFormInputs";

// test rendering
describe("Test GeneralPost Form component", () => {
    const onSubmit = (data: IFormInputs) => console.log(data);

    const wrapper = shallow(<GeneralPostForm onSubmit={onSubmit} />);

    it("should be able to render <GeneralPostForm />", () => {
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
