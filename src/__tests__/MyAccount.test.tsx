import React from "react";
import { shallow } from "enzyme";
import MyAccount from "../pages/MyAccount";

describe("Test MyAccount page", function () {
	it("should be able to render <MyAccount />", function () {
		shallow(<MyAccount />);
	});
});
