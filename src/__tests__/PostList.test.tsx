import React from "react";
import { shallow } from "enzyme";
import PostList from "../pages/PostList";

describe("Test PostList Page", () => {
    it("should be able to render <PostList />", () => {
        shallow(<PostList />);
    });
});
