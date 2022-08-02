import React from "react";
import { shallow } from "enzyme";
import AddComment from "../AddComment";

// describe("Test AddComment Entry point", () => {
//     it("should be able to render <AddComment />", () => {
//         shallow(<AddComment />);
//     });
// });

describe("AddComment", () => {
    it("AddComment child component: iconButton component should render", () => {
        const wrapper = shallow(<AddComment />);
        expect(wrapper.find({ children: "ChatBubbleOutlineIcon" }));
    });

    it("AddComment child component: iconButton component should render", () => {
        const wrapper = shallow(<AddComment />);
        expect(wrapper.find({ children: "Modal" }));
    });
});
