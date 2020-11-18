import React from "react";
import { shallow } from "enzyme";
import TimerButton from "./TimerButton";

describe("TimerButton", () => {
  let container: any;

  beforeEach(() => {
    container = shallow(
      <TimerButton buttonAction={jest.fn()} buttonValue={""} />
    );
  });

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  // it("should change isOn state true when the start button is clicked", () => {
  //   container.instance().forceUpdate();
  //   container.find(".start-timer").first().simulate("click");
  //   expect(container.instance().state.isOn).toEqual(true);
  // });

  // it("should change isOn state false when the stop button is clicked", () => {
  //   container.instance().forceUpdate();
  //   container.find(".stop-timer").first().simulate("click");
  //   expect(container.instance().state.isOn).toEqual(false);
  // });

  // it("should change isOn state false when the reset button is clicked", () => {
  //   container.instance().forceUpdate();
  //   container.find(".stop-timer").first().simulate("click");
  //   expect(container.instance().state.isOn).toEqual(false);
  //   expect(container.instance().state.minutes).toEqual(25);
  //   expect(container.instance().state.seconds).toEqual(0);
  // });
});
