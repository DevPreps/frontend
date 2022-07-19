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
describe("<MyAccount /> interactions", () => {
	const wrapper = shallow(<MyAccount />);
	// test My Posts link
	it("should redirect to My Post page when My Posts link is clicked", () => {
		expect(wrapper.find("Link").first().prop("to")).toEqual(
			"/my-account/my-posts"
		);
	});
	// test My Drafts page link
	it("should redirect to My Drafts page when My Drafts link is clicked", () => {
		expect(wrapper.find("Link").at(1).prop("to")).toEqual(
			"/my-account/my-drafts"
		);
	});
	// test My Bookmarks page link
	it("should redirect to My Bookmarks page when My Bookmarks link is clicked", () => {
		expect(wrapper.find("Link").at(2).prop("to")).toEqual(
			"/my-account/my-bookmarks"
		);
	});
});
