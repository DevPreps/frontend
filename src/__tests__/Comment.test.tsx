import React from "react";
import { shallow } from "enzyme";
import Comment from "../components/Comment";

describe("Test Comment page", function () {
	it("should be able to render <Comment />", function () {
		shallow(<Comment />);
	});
});
