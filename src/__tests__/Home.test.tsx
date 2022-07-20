import React from "react";
import { shallow } from "enzyme";
import Home from "../pages/Home";

describe("Test Home page", () => {
    it("should be able to render <Home />", () => {
        shallow(<Home />);
    });
});
