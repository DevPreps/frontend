import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("Test Login Page", () => {
    it("should be able to render <NotFound />", () => {
        shallow(<Login />);
    });
});
