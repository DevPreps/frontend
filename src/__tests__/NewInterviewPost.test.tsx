import React from "react";
import { shallow } from "enzyme";
import NewInterviewPost from "../pages/NewInterviewPost";

describe("Test Compose New Learn Post page", () => {
	it("should be able to render <NewInterviewPost />", () => {
		shallow(<NewInterviewPost />);
	});
});
