import React from "react";
import { shallow } from "enzyme";
import Post from "../Post";

describe("Test Post Page", () => {
    it("should be able to render <Post />", () => {
        shallow(<Post />);
    });
});
