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
});
