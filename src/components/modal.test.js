import React from "react";
import { shallow, configure } from "enzyme";
import Modal from "./modal";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Modal", () => {
  it("renders nothing when closed", () => {
    expect(shallow(<Modal onClose={jest.fn()} />)).toMatchSnapshot();
  });

  it("renders when open", () => {
    expect(
      shallow(<Modal show={true} onClose={jest.fn()} />)
    ).toMatchSnapshot();
  });

  it("calls onClose when button is clicked and closeable", () => {
    const onClose = jest.fn();
    const wrapper = shallow(
      <Modal show={true} onClose={onClose} closeable={true} />
    );

    const btn = wrapper.find("button");
    btn.simulate("click");
    expect(onClose).toBeCalled();
  });
});
