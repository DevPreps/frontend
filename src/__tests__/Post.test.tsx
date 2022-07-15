import React from "react";
import { shallow } from "enzyme";
import Post from "../pages/Post";

describe("Test Post Page", function () {
	it("should be able to render <Post />", function () {
		shallow(<Post />);
	});
});
