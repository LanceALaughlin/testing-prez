import React from 'react';
import { shallow, mount } from 'enzyme';
import FormInput from "./form-input";

const formInput = shallow(<FormInput />);

const red = "red";

describe("<FormInput />", () => {

  describe('Initalizing <FormInput />', () => {
     it("renders an input element", () => {
       expect(formInput).toMatchSnapshot();
     });

     it("should initialize the state with empty string", () => {
       expect(formInput.state().value).toEqual("");
     });
  });

  describe('On blur of <FormInput /> with empty field', () => {
    beforeEach(() => {
      formInput.find("#input").simulate("change", { target: { value: "" } });
      formInput.find("#input").simulate("blur");
    });

     it("should have error class when field is empty on blur", () => {
       expect(formInput.find("#input").hasClass("error")).toEqual(true);
     });

     it("should have error message when field is empty on blur", () => {
       expect(formInput.find(".error-message").exists()).toEqual(true);
     });
  });
 
  it('should update state value on keyPress', () => {
    formInput.find("#input").simulate("change", { target: { value: "f" } });
    expect(formInput.state().value).toEqual("f");
  });

  it('should have error class when invalid email address is entered on blur', () => {
    formInput.find("#email").simulate("change", { target: { value: "lance@asd" } });
    formInput.find("#email").simulate("blur");
    expect(formInput.find("#email").hasClass("error")).toEqual(true);
  });
});