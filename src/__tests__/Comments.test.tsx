import React from "react";
import { shallow } from "enzyme";
import Comments from "../components/post/Comments";

describe("Test Comments Entry point", function () {
	it("should be able to render <Comments />", function () {
		shallow(<Comments />);
	});
});
