/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { Contact, sendMessage, verifyEmail } from "../Contact";

const OLD_ENV = process.env;
beforeEach(() => {
  jest.resetModules() // Most important - it clears the cache
  process.env = { ...OLD_ENV }; // Make a copy
});

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});

// test component rendering
describe("Test Contact Page rendering", () => {
    const wrapper = shallow(<Contact />);

    it("should be able to render title Contact Us", () => {
        expect(wrapper.find({ children: "Contact Us" }).length).toBe(1);
    });

    it("should render 4 ListItem", () => {
        expect(wrapper.find("ForwardRef(ListItem)").length).toBe(4);
    });

    it("should be able to render Contact Form", () => {
        expect(wrapper.find("ContactForm").length).toBe(1);
    });
});

// test sendMessage function
describe("Test sendMessage function", ()=>{
    // set the environment variables that used in this function here otherwise the values will be undefined
    process.env.REACT_APP_EMAIL_SERVICE_ID = "service_t8pnrwt"
    process.env.REACT_APP_EMAIL_TEMPLATE_ID = "template_j07l6kp"
    process.env.REACT_APP_EMAIL_PUBLIC_KEY = "Rt2DlEkme_qQfP2eZ"
    const testData = {name: "tester", email: "lisa20210219@gmail.com", subject: "test", message: "test" }
    it("should return true with correct testData", async ()=>{
        expect(await sendMessage(testData)).toBeTruthy();
    }, 20000) //set 20000 ms here to fix "Exceeded timeout of 5000 ms for a test error"
})

// test verifyEmail function
describe("Test verifyEmail function",()=>{
    // set the environment variable that used in this function here otherwise the value will be undefined
    process.env.REACT_APP_EMAIL_VALIDATION_KEY = "9lz5HXjTSLZcGuFpN7az5IAVpkg4tqpI" 

    const testData = {name: "tester", email: "lisa20210219@gmail.com", subject: "test", message: "test" }
    it("find should return true with a deliverable email", async ()=>{
        expect(await verifyEmail(testData)).toBeTruthy();
    }, 20000)

    it("find should return false with a undeliverable email", async ()=>{
        expect(await verifyEmail({...testData, email: "lisa20220219@gmail.com"})).toBe(false);
    }, 20000)
})
