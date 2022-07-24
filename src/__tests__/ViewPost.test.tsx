import React from "react";
import { shallow } from "enzyme";
import ViewPost from "../components/post/ViewPost";

describe("Test ViewPost Entry point", function () {
	it("should be able to render <ViewPost />", function () {
		shallow(<ViewPost />);
	});
});
