import React from "react";
import { shallow } from "enzyme";
import Clock from "./Clock";

it("renders without crashing", () => {
  shallow(<Clock />);
});
