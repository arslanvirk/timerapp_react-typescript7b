import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Timer from "../timer/Timer";

describe("App Component Render ", () => {
  let costainer = shallow(<App />);
  it("should  render a div ", () => {
    expect(costainer.find("div").length).toEqual(1);
  });

  it("should  render a timer component", () => {
    expect(costainer.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
