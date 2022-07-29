import React from "react";
import { shallow } from "enzyme";
import CommentCard from "../CommentCard";

describe("Test CommentCard Entry point", () => {
    it("should be able to render <CommentCard />", () => {
        shallow(<CommentCard />);
    });
});