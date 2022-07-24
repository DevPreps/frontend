import React from "react";
import { shallow } from "enzyme";
import PostDetail from "../components/post/PostDetail";

describe("Test PostDetail Entry point", function () {
	it("should be able to render <PostDetail />", function () {
		shallow(<PostDetail />);
	});
});
