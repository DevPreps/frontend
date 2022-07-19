import React from "react";
import { shallow } from "enzyme";
import Comment from "../components/Comment";

describe("Test Comment page", () => {
	it("should be able to render <Comment />", () => {
		shallow(<Comment />);
	});
});
