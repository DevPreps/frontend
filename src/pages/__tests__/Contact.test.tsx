/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, shallow } from "enzyme";
import {jest} from "@jest/globals";
import Contact from "../Contact";
import axios from "axios";

jest.mock("axios", ()=>{
    const dataMap:object = {
        error: {code: -1},
        succData: {
            code: 0, data: 1
        }
    }
    let dataKey: string;
    return {
        setKey: (key:string) => {
            dataKey = key;
        },
        get: ()=> dataMap[dataKey]
    }
})

// test component rendering
// describe("Test Contact Page rendering", () => {
//     const wrapper = shallow(<Contact />);
//     console.log(wrapper.debug());
    
//     it("should be able to render title Contact Us", () => {
//         expect(wrapper.find({ children: "Contact Us" }).length).toBe(1);
//     });

//     it("should render 4 ListItem", () => {
//         expect(wrapper.find("ForwardRef(ListItem)").length).toBe(4);
//     });

//     it("should be able to render Contact Form", () => {
//         expect(wrapper.find("ContactForm").length).toBe(1);
//     });
// });

// test component interaction
describe("Test Contact page interaction",()=>{
    const wrapper = mount(<Contact />)
    // console.log(wrapper.debug());
    it("find send button", ()=>{
        const contactForm = wrapper.find("ContactForm")
        const mockSubmit = jest.mock("handleSubmit")
        contactForm.invoke("onSubmit")().then(()=>{
            expect(mockSubmit).toBeCalledTimes(1)  
        })
        
    })
})
