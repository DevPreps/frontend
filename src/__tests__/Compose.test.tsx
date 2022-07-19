import React from "react";
import { shallow } from "enzyme";
import Compose from "../pages/Compose";

// test component rendering
describe("<Compose /> rendering", () => {
	const wrapper = shallow(<Compose />);
	// test if the Compose component renders
	it("should be able to render <Compose />", () => {
		wrapper;
	});
	// test if there are 9 Link elements
	it("should render 4 Links", () => {
		expect(wrapper.find("Link")).toHaveLength(4);
	});
});

// test component interactions
describe("<Compose /> interactions", () => {
	const wrapper = shallow(<Compose />);
	// test Home page link
	it("should redirect to Compose General Post page when General link is clicked", () => {
		expect(wrapper.find("Link").first().prop("to")).toEqual("/compose/general");
	});
	// test Learn page link
	it("should redirect to Compose Interview Post page when Interview link is clicked", () => {
		expect(wrapper.find("Link").at(1).prop("to")).toEqual("/compose/interview");
	});
	// test Interview page link
	it("should redirect to Compose Learn Post page when Learn link is clicked", () => {
		expect(wrapper.find("Link").at(2).prop("to")).toEqual("/compose/learn");
	});
	// test Projects page link
	it("should redirect to Compose Project Post page when Project link is clicked", () => {
		expect(wrapper.find("Link").at(3).prop("to")).toEqual("/compose/project");
	});
});
