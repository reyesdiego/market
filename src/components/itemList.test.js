import React from "react";
import { shallow, configure } from "enzyme";
import ItemList from "./ItemList";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("ItemList", () => {
  it("calls add when button is clicked", async () => {
    const spy = jest.spyOn(ItemList.prototype, "add");
    const wrapper = shallow(<ItemList />);
    wrapper.find('button[id="btnAdd"]').simulate("click", "using prototype");
    expect(spy).toHaveBeenCalled();
  });
});
