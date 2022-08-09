import React from "react";
import { shallow } from "enzyme";
import PostModalLayout from "../PostModalLayout";

describe("Test PostModalLayout component", () => {
    const wrapper = shallow(
        <PostModalLayout operation="COMPOSE">
            <p>test children rendering</p>
        </PostModalLayout>
    );

    it("should be able to render COMPOSE in title", () => {
        expect(wrapper.find("ForwardRef(Typography)").text()).toEqual(
            "COMPOSE"
        );
    });

    it("should be able to render a operation button", () => {
        expect(wrapper.find({ "data-testid": "operationBtn" }).text()).toEqual(
            "COMPOSE"
        );
    });

    it("should be able to render a close button", () => {
        expect(wrapper.find({ children: "X" }).length).toBe(1);
    });

    it("should be able to render children component", () => {
        expect(wrapper.contains(<p>test children rendering</p>)).toBe(true);
    });
});
