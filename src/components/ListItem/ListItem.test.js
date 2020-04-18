import React from "react";
import { shallow } from "enzyme";
import ListItem from "./ListItem";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<ListItem {...props} />);
  return component;
};
describe("ListItem Component", () => {
  describe("ListItem Component with no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    test("listItemComponent should render", () => {
      const wrapper = findByTestAttr(component, "listItemComponent");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("ListItem Component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        restaurant: {
          name: "name1",
          price: 1,
          rating: 4,
          image_url: "www",
        },
        order: 1,
      };
      component = setUp(props);
    });

    test("listItemComponent should render", () => {
      const wrapper = findByTestAttr(component, "listItemComponent");
      expect(wrapper.length).toBe(1);
    });

    test("restaurantName should render without errors", () => {
      const wrapper = findByTestAttr(component, "restaurantName");
      expect(wrapper.text()).toEqual("name1");
    });
    test("restaurantRating should render without errors", () => {
      const wrapper = findByTestAttr(component, "restaurantRating");
      expect(parseInt(wrapper.text())).toBe(4);
    });
  });
});
