import React from "react";
import { shallow } from "enzyme";
import NotFound from "../pages/NotFound";

describe("Test NotFound Page", () => {
	it("should be able to render <NotFound />", () => {
		shallow(<NotFound />);
	});
});
