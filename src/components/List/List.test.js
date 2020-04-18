import React from "react";
import { shallow } from "enzyme";
import List from "./List";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<List {...props} />);
  return component;
};
describe("List Component", () => {
  describe("List Component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: ["#", "first", "second", "third", "fourth"],
        restaurants: [
          {
            id: 1,
            name: "name1",
            price: 1,
            rating: 4,
            image_url: "www",
          },
          {
            id: 2,
            name: "name2",
            price: 1,
            rating: 4,
            image_url: "www",
          },
        ],
      };
      component = setUp(props);
    });
    test("header should render with 5 items", () => {
      const wrapper = findByTestAttr(component, "listComponent");
      expect(wrapper.length).toBe(1);
    });
    test("header should render with 5 items", () => {
      const wrapper = findByTestAttr(component, "headerTest");
      expect(wrapper.length).toBe(5);
    });
    test("list should render with 2 items", () => {
      const wrapper = findByTestAttr(component, "itemTest");
      expect(wrapper.length).toBe(2);
    });
  });
});
