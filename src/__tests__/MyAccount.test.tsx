import React from "react";
import { shallow } from "enzyme";
import MyAccount from "../pages/MyAccount";

// test component rendering
describe("<MyAccount /> rendering", () => {
	const wrapper = shallow(<MyAccount />);
	// test if the Compose component renders
	it("should be able to render <MyAccount />", () => {
		wrapper;
	});
	// test if there are 9 Link elements
	it("should render 3 Links", () => {
		expect(wrapper.find("Link")).toHaveLength(3);
	});
});

// test component interactions
describe("<Compose /> interactions", () => {
	const wrapper = shallow(<MyAccount />);
	// test Home page link
	it("should redirect to Compose General Post page when General link is clicked", () => {
		expect(wrapper.find("Link").first().prop("to")).toEqual(
			"/my-account/my-posts"
		);
	});
	// test Learn page link
	it("should redirect to Compose Interview Post page when Interview link is clicked", () => {
		expect(wrapper.find("Link").at(1).prop("to")).toEqual(
			"/my-account/my-drafts"
		);
	});
	// test Interview page link
	it("should redirect to Compose Learn Post page when Learn link is clicked", () => {
		expect(wrapper.find("Link").at(2).prop("to")).toEqual(
			"/my-account/my-bookmarks"
		);
	});
});
