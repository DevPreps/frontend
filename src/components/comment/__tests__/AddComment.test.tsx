import React from "react";

import { shallow } from "enzyme";

import AddComment from "../AddComment";

describe("Test AddComment Entry point", () => {
    it("should be able to render <AddComment />", () => {
        shallow(<AddComment />);
    });
});
