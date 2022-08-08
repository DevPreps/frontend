import React from "react";
import { shallow } from "enzyme";
import Contact from "../Contact";

describe("Test Contact Page", () => {
    const wrapper = shallow(<Contact />);
    console.log(wrapper.debug());
    it("should be able to render title Contact Us", () => {
        expect(wrapper.find({ children: "Contact Us" }).length).toBe(1);
    });

    it("should render 4 ListItem", () => {
        expect(wrapper.find("ForwardRef(ListItem)").length).toBe(4);
    });

    it("should be able to render Contact Form", () => {
        expect(wrapper.find("ContactForm").length).toBe(1);
    });
});
