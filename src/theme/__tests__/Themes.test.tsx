import { baseTheme } from "../Themes";

test("theme is used", () => {
    const wrapper = baseTheme("light");
    expect(wrapper.palette.mode).toBe("light");
});
