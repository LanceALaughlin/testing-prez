import React from "react";
import { shallow } from 'enzyme';
import Form from './form';

describe("<Form />", () => {
  const inventory = { name: "Fresh Prince", available: 6 };
  const form = shallow(<Form inventory={inventory} />);

  const findAndType = (value) => {
    form.find("#input").simulate("change", { target: { value } });
  }

  const buttonToBeDisabled = (shouldBeDisabled) => {
    expect(form.find("#button").prop("disabled")).toEqual(shouldBeDisabled);
  }
  
  it("should render", () => {
    expect(form).toMatchSnapshot();
  });

  it('should be initialized with empty value ', () => {
     expect(form.state().value).toEqual("");
  });

  it("should update form state on input change", () => {
    findAndType("5");
    expect(form.state().value).toEqual("5");
  });

  it("should disable button if input is empty", () => {
    findAndType("");
    buttonToBeDisabled(true);
  });
  

  it("should limit quantity to available quantity", () => {
    findAndType("50");
    buttonToBeDisabled(true);
  });

});