/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, shallow } from "enzyme";
import CreateGeneralPost from "../CreateGeneralPost";

// test rendering
describe("Test Create General Post page", () => {
    const wrapper = shallow(<CreateGeneralPost />);

    it("should contain PostForm component", () => {
        expect(wrapper.find("PostForm").length).toBe(1);
    });

    it("should contain Compose button", () => {
        expect(wrapper.find({ children: "Compose" }).length).toBe(1);
    });

    it("should contain Close button", () => {
        expect(wrapper.find({ children: "X" }).length).toBe(1);
    });
});

// test functions
// describe("Test Create General Post page", () => {
//     const wrapper = shallow(<CreateGeneralPost />);

//     it("useState setOpen should be called />", () => {
//         // console.log(wrapper.debug());
//         const setStateMock= jest.fn();
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         const useStateMock: any=(useState: boolean) => [useState, setStateMock];
//         jest.spyOn(React, "useState").mockImplementation(useStateMock);
//         const modal = wrapper.find("ForwardRef(Modal)")
//         const openModalBtn = wrapper.find("[data-testid='openModalBtn']")
//         openModalBtn.simulate("click");
//         expect(modal.prop("open")).toEqual(true)
//         // expect(setStateMock).toHaveBeenCalledWith(true)

//     });

// it("should contain GeneralPostForm component />", () => {
//     expect(wrapper.find("GeneralPostForm").length).toBe(1);
// });
// });
