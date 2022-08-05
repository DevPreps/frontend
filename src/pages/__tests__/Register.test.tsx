import React from "react";
import { shallow } from "enzyme";
import Register from "../Register";

describe("Test Register Page", () => {
    it("should be able to render <Register />", () => {
        shallow(<Register />);
    });
});
