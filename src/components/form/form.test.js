import React from "react";
import { shallow } from 'enzyme';
import Form from './form';

describe("<Form />", () => {
  const inventory = { name: "Fresh Prince", available: 6 };
  const form = shallow(<Form inventory={inventory} />);
  
  it("should render", () => {
    expect(form).toMatchSnapshot();
  });

  it('should be initialized with empty value ', () => {
     expect(form.state().value).toEqual("");
  });

  it("should update form state on input change", () => {
    form.find("#input").simulate("change", { target: { value: "5" } });
    expect(form.state().value).toEqual("5");
  });

  it("should disable button if input is empty", () => {
    form.find("#input").simulate("change", { target: { value: "" } });
    expect(form.find("#button").prop("disabled")).toEqual(true);
  });
  

  it("should limit quantity to available quantity", () => {
    const inventory = { name: "Fresh Prince", available: 6 };
    form.find("#input").simulate("change", { target: { value: "50" }});
    expect(form.find("#button").prop("disabled")).toEqual(true);

  });

  
});