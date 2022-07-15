import React from "react";
import { shallow } from "enzyme";
import PostList from "../pages/PostList";

describe("Test PostList Page", function () {
	it("should be able to render <PostList />", function () {
		shallow(<PostList />);
	});
});
