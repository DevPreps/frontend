import React from "react";
import { shallow } from "enzyme";
import GeneralPostForm from "../GeneralPostForm";
import { IFormInputs } from "../IFormInputs";

// test rendering
describe("Test GeneralPost Form component", () => {
    const onSubmit = (data: IFormInputs) => console.log(data);
    const wrapper = shallow(<GeneralPostForm onSubmit={onSubmit} />);

    // should render the whole component
    it("should be able to render <GeneralPostForm />", () => {
        wrapper;
    });

    it("should have two TextFieldInput", () => {
        expect(wrapper.find("TextFieldInput").length).toBe(2);
    });

    it("should have 1 SelectInput", () => {
        expect(wrapper.find("SelectInput").length).toBe(1);
    });

    it("should have 1 TagsInput", () => {
        expect(wrapper.find("TagsInput").length).toBe(1);
    });

    // should have input with name "title"
    it("should have input with name title", () => {
        expect(wrapper.find({ name: "title" }).length).toBe(1);
    });

    // should have input with name "category"
    it("should have input with name category", () => {
        expect(wrapper.find({ name: "category" }).length).toBe(1);
    });

    // should have input with name "content"
    it("should have input with name content", () => {
        expect(wrapper.find({ name: "content" }).length).toBe(1);
    });

    // should have input with name "tags"
    it("should have input with name tags", () => {
        expect(wrapper.find({ name: "tags" }).length).toBe(1);
    });
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
