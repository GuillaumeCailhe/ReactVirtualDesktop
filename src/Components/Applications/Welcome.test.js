import React from "react";
import { shallow } from "enzyme";
import Welcome from "./Welcome";

it("renders without crashing", () => {
  shallow(<Welcome />);
});
