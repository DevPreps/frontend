import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/Footer";

describe("Test Footer Entry point", function () {
	it("should be able to render <Footer />", function () {
		shallow(<Footer />);
	});
});
